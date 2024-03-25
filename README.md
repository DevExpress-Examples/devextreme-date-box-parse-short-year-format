<!-- default badges list -->
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T1211517)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
<!-- default badges end -->
# DateBox for DevExtreme - How to Parse and Update Short Year Input

The DevExtreme DateBox component interprets one/two-digit year values as years in the 20th century (for example, "15" is interpreted as "1915"). This is how the JavaScript `Date()` constructor processes input when you pass numeric arguments.

This example customizes default functionality and allows you to specify the century portion of a given date value.  

![DateBox - standalone and in DataGrid - with parsed short dates](/date-box-parse-short-year-format.gif)

Use the [displayFormat](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDateBox/Configuration/#displayFormat) property and implement custom parser and formatter functions. The parser function analyzes input date value, identifies two-digit year entries, and transforms them into dates in the current/previous century (based on a specific algorithm).

In this sample project, you will find a SelectBox with 4 options for the parser function. (Output for certain algorithms depends on the current year. Examples in the table below are for 2024.)

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
