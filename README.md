## What is `Black` ?

Black is a 
* **simplistic**,
* `anonymous`, 
* low-profile \
theme. 


Designed with the afore mentioned values in mind, `black` strives to reduce \
clutter by removing anything unnecessary and improve readability by maximizing \
the contrasts between text and backgrounds. \
\
Using simple, globally tested fonts, such as **Inter**, or `Geist Mono` reduces strain \
on your eyes. 

### Example website [here](https://sunkenpotato.com)

## Installing


You can manually install the theme by going to https://github.com/SunkenPotato/black.git and copying the files to themes/black

Or clone it into themes/black

```bash
$ git clone https://github.com/SunkenPotato/black.git themes/black
```

If you don't wanna make any radical changes, and always have the newest updates, you can add it as a submodule

```bash
$ git submodule add https://github.com/SunkenPotato/black.git themes/black
```

## Configuration

Configuration is pretty simple. Just create a `config.toml` file and paste the following text into it. Remember to change the parameters according to your liking.

```toml
baseurl = "<your url>/<localhost>"
title = "<your title>"
languageCode = "en-US" # Not supported yet.
theme = "black"

[params]
    frontimage = "<your image>" # The base image.

[menu]
    [[menu.main]]   # Example menu item
        name = "Home" # Your menu text
        url = "/"   # The URL it points to
        weight = 1 # The index of the menu item
        [menu.main.params] # Optional.
            disabled = false
```

## Shortcodes
You can use all of the default hugo shortcodes, like `{{<figure>}}` etc. https://gohugo.io/content-management/shortcodes/

### spacer
Creates a empty div that just adds space

Example usage:
```html
{{<spacer>}}
```

### divider
Creates a line that goes along the page horizontally. Useful for dividing content

Parameters:
* `cl` Sets the divider color in hexadecimal. (optional)

Example usage
```html
{{<divider>}}
```
or with `cl`
```html
{{<divider cl="#ff0000">}} 
```


## Favicon
Check the docs.

## How to edit the theme
You don't need anything. Just go ahead and do it.

## License
Copyright © 2024 SunkenPotato.
This theme has been released under the MIT license. Check the original theme license for further information.