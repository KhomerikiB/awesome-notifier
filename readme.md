## Package Description

Create different type of notifications/popups

# Installation

`npm i awesome-notifier` or `yarn add awesome-notifier`

# How it work

```

import { nofiy } from 'awesome-notifier'

notify.popup({
  type: "success",
  text: "It was Successfull",
})

```

## Options

awesome-notifier method popup supports two options:

- _Initials_string_ - _String('success','error','warning')_ (default is 'success')
- _Initials_string_ - _String_ (default is 'It was Successfull')
