<!-- default badges list -->
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T1211517)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
<!-- default badges end -->
# DateBox for DevExtreme - How to parse and update short year input

The DateBox component interprets one- and two-digit year inputs as years in the 20th century (for example, "15" becomes "1915"). This is how the JavaScript `Date()` constructor processes input if you pass numeric arguments. 

This example shows how to customize this functionality and specify the century part according to your application's use cases. 

![DateBox - standalone and in DataGrid - with parsed short dates](/date-box-parse-short-year-format.gif)

Use the [displayFormat](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDateBox/Configuration/#displayFormat) property and implement custom parser and formatter functions. The parser function analyzes the input date, identifies two-digit year entries, and transforms them into dates in the current or previous century, depending on a specific algorithm.

In this sample project, you will find a SelectBox with 4 options for the parser function. (Output of some algorithms depends on the current year. Examples in the table below are for the year 2024.)

| Option | Cut-off range |
|:------:|:-------------:|
| Century cuts off at 50 years | 2049/1950 |
| Century cuts off after the current decade | 2029/1930 |
| Century cuts off at the current year | 2024/1925 |
| No century cut-off | Always 2000s |

## Files to Review

- **jQuery**
    - [index.js](jQuery/src/index.js)
- **Angular**
    - [app.component.html](Angular/src/app/app.component.html)
    - [app.component.ts](Angular/src/app/app.component.ts)
- **Vue**
    - [Home.vue](Vue/src/components/HomeContent.vue)
- **React**
    - [App.tsx](React/src/App.tsx)
- **NetCore**    
    - [Index.cshtml](ASP.NET%20Core/Views/Home/Index.cshtml)

## Documentation

- [Getting Started with DateBox](https://js.devexpress.com/Documentation/Guide/UI_Components/DateBox/Getting_Started_with_DateBox/)
- [DateBox - displayFormat](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDateBox/Configuration/#displayFormat)
- [DataGrid - columns.editorOptions](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#editorOptions)

## More Examples

- [DateBox Formatting demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DateBox/Formatting/)
