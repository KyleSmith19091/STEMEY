<div align="center">
<h1>STEMEY Website <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="30px"></h1>
</div>

> A high school led nonprofit organization that aims to inspire middle and high school students to pursue STEM and to democratize STEM education.

---

This is a react project and was bootstrapped with create-react-app. 

## Read me before Contributing!

### Source File Structure Explained:

```
+-- src 
|   +-- Component
|   +-- Controller
|   +-- Hooks
| 	+-- Data
|   +-- Img
|       |   +-- Icon
|       |   +-- SVG
|       |   +-- Photo
|   +-- Model
|   +-- Route
|   +-- Style
|       |    +-- Component
|       |    +-- Route
```

##### Component
> Custom React Components used in Route files.

##### Controller
> Modules which control the way a user interacts with application ex. Database access, Login procedures etc.

##### Data
> Data for populating components/routes.

##### Hooks
> Custom Hooks

##### Img
> Contains all image files used in the website ex. *.png, *.svg, *.jpg

##### Model
> Contains modules which model objects that will be used in the **Controller**, **Components** etc.

##### Route
> Full web pages, which will make use of components.

##### Style
> Will contain the style sheets for the different components and routes.

### Overall Desgin Requests
<div align="center">

1. Please follow colors laid out in the root element in index.css.

2. Please **focus** on "Mobile-First" development when designing a component or a route, ensure the component works and looks good on all possible dimensions.

3. Please add PropTypes when creating a component that requires props to be passed to it to help others that might use your component in the future.

4. Please make use of React Arrow Functional Components.

5. CSS Styling should *preferably* be done in the CSS style sheet for that component, but can also be done in the js/jsx file.

</div>

