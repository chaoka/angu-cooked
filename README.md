# angu-cooked

## What's included ?

- Routing
- Guards
- Localization

## What's excluded (so far) ?

- TSLint
- ESLint

TSLint is deprecated, ESLint adds almost 10 dependencies. No thank you.

## Add languages

1. Mark your template to translate (e.g. in app.component.ts, line 6 `<h1 i18n>Hello world!</h1>`)

2. Run `npm run i18n` to extract things to translate. It will create a file in `src/locale` called `messages.xlf`

3. Duplicate `messages.xlf`, rename it (e.g. `messages.fr-ca.xlf` already there as an example) and send it to your translator

4. Add one or more locale in the `angular.json` file, `line 45` (fr-CA is already there as an example)

### N.B.

You can translate routes using $localize (e.g. ``$localize`login` ``) but the path won't be available cross languages, e.g. `en/login` and `fr/connexion` will work, but `fr/login` or `en/connexion` wont.

## Guards

### AuthGuard

Preven access to requested page and redirect authenticated user

### UserGuard

Check is user can access and redirect based on role

### AdminGuard

Same as UserGuard but for alternative role

## RedirComponent

Redirect users from base url without updating url.