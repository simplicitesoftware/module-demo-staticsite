<!--
 ___ _            _ _    _ _    __
/ __(_)_ __  _ __| (_)__(_) |_ /_/
\__ \ | '  \| '_ \ | / _| |  _/ -_)
|___/_|_|_|_| .__/_|_\__|_|\__\___|
            |_| 
-->
![](https://platform.simplicite.io//logos/logo250.png)
* * *

`DemoStaticSite` module definition
==================================

### Introduction

This module contains a custom static public frontend for the order management demo.

The frontend itself is a [Vue.js](Vue.js) applications located in the `others` folder.

### Prerequisites

The `Demo` module **must** be installed and configured before importing this addon module.

### Import

To import this module:

- Create a module named `DemoStaticSite`
- Set the settings as:

```json
{
	"type": "git",
	"origin": {
		"uri": "https://github.com/simplicitesoftware/module-demo-staticsite.git"
	}
}
```

- Click on the _Import module_ button

### Configuration

You can make it the public page by adding this mapping to the `URI_MAPPINGS` system parameter:

```json
[
    (...)
    { "source": "^(.*)$", "destination": "/ext/DemoStaticSite$1" }
]
```

`DemoStaticSite` external object definition
-------------------------------------------

Static frontend external object


