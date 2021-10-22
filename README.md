# Test notes

In this test I unfortunately haven't managed to achieve the objective in the time specified. I started ok for the first two hours using TDD to build out the components in a scalable way. At this point though, I still hadn't considered styling and implementing the breakpoints. I was unsure how to approach implementing the breakpoints, initially wanting to make a simple breakpoint based on a screen width function or using CSS, but finally thought that using ChakraUI's breakpoints feature might allow me to move faster given the time constraints.

This was a bad idea...

By the time I had understood how to customise their breakpoints to the ones specified, I had already significantly eaten into my remaining time, and then I saw that all my tests were breaking. Oh to mock Chakra and the widow matchMedia function... After that I had an issue with my tests using 'mount' and I watched with horror as the time ticked over. So I did my best to apply some styling and fetch the data to calculate the onTrack pill state, but by now I was well out of time and have therefore only partially implemented the feature.

# What I would do differently given more time and things I would like to improve.

- I would not have used ChakraUi and implemented a single breakpoint in a simpler way.
- I would use StyledComponents for the styling and organise things a lot more neatly instead of the inline styles I've implemented at the moment.
- I would finish the business logic for the pill data and have them tested.
- I would have preferred using Typescript, but I was already concerned about the time and thought it would further slow me down.
- My tests are far from complete. There are no tests for the actions and the component tests could be more complete.
- I'm not happy with my naming. CardGrid is misleading and originally sat bedside CardCarousel as I had originally planned to use two separate components before eventually settling on the single component. I'm still not sure this was the best idea.

Thanks for the chance to submit the test in any case. It was a challenging exercise.
