### Starter Project for the Material UI 

Download the code & run **npm install** to install dependencies before starting the app.

You'll also need to install Material UI as a dependency. To do this run **npm install @material-ui/core**

# Typography
* at first you need to import "import Typography from '@mui/material/Typography';"
* then we can use Typography component. and then there are some different variant property for typography.
Note: So all the components we need to use then have to import that. 

# Icons
* npm install @mui/icons-material
# for the custom css we should use - makeStyles custom hook.
# we can also change the default theme from Material Ui. Just import `createMuiTheme, ThemeProvider` from core library. and then overwrite  the property from palette object.
* we can add google font instead of default 'roboto' font by MaterialUi. Just import google font style into index.css and overwrite  the property into theme object.

* `textField` inside the `form`. 'label', 'variant', 'color' ... property. We can handle input value and error using    useState method. 

* `Radio`- we should use radio button under the `RadioGroup` and then it will selected only one. If I change one another one will deselect automatically.