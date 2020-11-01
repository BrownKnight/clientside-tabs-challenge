# Considerations
During the development of this solution, I have focussed on the following considerations: Accessbility, Reusability

## Accessibility
For this consideration, I have tried to stick to the basics. Using descriptive tags (i.e. `ol` and `li` instead of `div`) to structure the DOM allows for screen readers and other accessibility guides to better describe the state of the page, and aids in navigation.

I have also used the `role` attribute to describe certain non-obvious functions of the component, such as describing the `ol` elements as a tabpanel, and the three `a`s that form the tab buttons are described as `tab`s

Using standard methods to hide elements (in this case setting `display:none` css) allows for assistive technologies to accurately describe the state of the page.

## Reusability
With the aim of reusuability, I tried to seperate code into reusuable classes, that are not intrinically tied to their current use case.

For exmaple, the `ContentFetch` class can return the entire response JSON for any given section, which means callers for that method can use it in whatever fashion they like.

Likewise, the `TabPanel` suppoorts an arbitrary number of tab panels, they just have to be initialised individually. The `TabPanel` does not even necessarily need to be part of a tab group, and the logic for when they are shown is controlled externally from the element, which means the element and the inner list can be used in any situation and easily recomposed.

There are however some improvement that could be made in this area, for example the ListItem creation is tied instricially to the TabPanel class, when actually it could be seperated, allowing list items to be created outside of tabs for other components.