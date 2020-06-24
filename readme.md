## Package Description

Create different type of notifications/popups

# Installation

`npm i awesome-notifier` or `yarn add awesome-notifier`

# How it work

```

import { nofiy } from 'awesome-notifier'

notify.renderPopup()

```

# Examples

```

import { nofiy } from 'awesome-notifier'

notify.renderPopup({
    type:'success',
    text:'Success Message'
})
notify.renderPopup({
    type:'error',
    text:'Error Message'
})
notify.renderPopup({
    type:'success',
    text:'Warning Message'
})

```

## Options

awesome-notifier method popup supports two options:

- _Initials_string_ - _String('success','error','warning')_ (default is 'success')
- _Initials_string_ - _String_ (default is 'It was Successfull')
