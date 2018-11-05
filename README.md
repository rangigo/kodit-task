# Kodit.io Front-end task
## Live demo: https://rangigo.github.io/kodit-task/
## Background
Apartment sellers come to our website looking for a valuation. They land on this page*, fill
in the apartment data, and get an estimated price for their home. As a follow-up step
sellers can provide contact details in order to have an on-site inspection by one of
Kodit.io’s specialists, in order to finalise the offer.
## Task
Implement a user interface providing the data-input functionality found in the current
website valuation form and extend it by displaying not only an estimated price but also a
data visualisation widget providing related insight. Data to populate the visualisation can
be fetched from the endpoint provided below. The widget should be interactive and offer
at least 1 level of drill-down information.
Note: returning an accurate estimation is not relevant and can be mocked up.

## Explanation
* Data Visualization: I decided to go with Sunburst as it is powerful way to demonstrate part to whole relationships. Since the data related to the final result should be other apartments from the same street, they share some attributes with each other and Sunburst is a suitable chart to visualize them exhaustively.
* Interactive widget: User should be able to navigate the detailed information about the apartment that is displayed on the chart by hovering. User can also lock the selection to highlight the needed information by clicking.

## !Note
The app only works with valid addresses from the provided dataset (e.g. 'Kuhatie 10', 'Iivisniementie 4'). Enter any other address will result in errors.

## Features
* Form validation with user data
* Data visualization with react-vis
* Basic UI clone from kodit.io form evaluation

## Technologies used
* React 16.6
* Redux Form (plan to migrate to Formik soon)
* React Vis
