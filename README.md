# Testing Angular Services

Angular's [guide to testing](https://angular.io/guide/testing) is impressive both in it's scope and *fantastic* technical commuication. Much of the documentation discusses the Angular-specific testing utilities, namely the `TestBed` API which is crucial in testing Components and their templates.

There is, however, [a callout](https://angular.io/guide/testing#isolated-unit-tests-vs-the-angular-testing-utilities) in the testing guide that's easy to miss:

> Isolated unit tests examine an instance of a class all by itself without any dependence on Angular or any injected values. The tester creates a test instance of the class with new, supplying test doubles for the constructor parameters as needed, and then probes the test instance API surface.
>
>*You should write isolated unit tests for pipes and services.*

What does that mean?

In short, the guide is sugesting **not** to use the `TestBed` API for testing services.

In code, that means that instead of writing this:

```js
beforeEach(() => {
  const bed = TestBed.configureTestingModule({
    providers: [
      UserService,
      { provide: ApiService, useClass: StubApiService }
    ]
  });

  stubApiService = bed.get(ApiService);
  service = bed.get(UserService);
});
```

You should be writing this:

```js
beforeEach(() => {
  stubApiService = new StubApiService();
  service = new UserService(stubApiService as ApiService);
});
```


I'll now presume you're a free thinker and don't plan on taking any absolute statement (from myself or the Angular team) at face value. So let's explore a couple reasons *why*: complexity and speed.

# Why: Complexity

It's clear to see that there's a lot less going on in the pure JS test setup.

Since `UserService` is just an ES6 class, we can `new` it up as long as we have its single constructor dependency: an `ApiService`. Here, we've made a `StubApiService`, assigned it to a test-global variable to allow test-specific faking, and cast it as an `ApiService`, which is what `UserService` is expecting

We get the same end result from the `TestBed` version, but we're having to do a lot more to get there: We configure a `TestingModule` and assign it to a local varible. That includes wiring up dependency injection using the `providers` array, with our system under test, the `UserService` being provided directly, while using `useClass` to provide our stub in place of a real `ApiService`. Then we have to pull both the stub and the service instance *out* of the injector using the testbed.

Not only is this more code to write and therefore more of a chance to make a mistake, but it's unnecessary cognitive burden **unrelated to the concern of testing `UserService`'s functionality**.

Since the outcomes of the two different mechanisms for setting up the service under test are identical, one should strongly favor the simplest solution.

# Why: Speed

Certainly, with more indirection happening with the `TestBed` setup, there's obviously more code running to make things happen. This of course isn't a bad thing if the indirection is warranted *and* the performance impact isn't materially different. However, with `TestBed`, the performance cost can be seen at even a small scale.

`UserService.get()` grabs a user object from `ApiService`, and transforms it a bit as so:

```js
getUser(): Observable<IUser> {
  return this.apiService
    .get(userApiUri)
    .map((apiUser: IApiUser) => {
      const honorific = apiUser.isKnighted ? 'Dame' : '';
      return {
        id: apiUser.id,
        fullName: `${honorific} ${apiUser.firstName} ${apiUser.lastName}`
      };
    });
}
```
