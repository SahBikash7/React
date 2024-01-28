###

- React Fibre is the React's Core algorithm.The Virtual DOM is still created by react and the DOM is updated by the algorithm "Fibre"

- The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

- Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.

### Hydration Concept :

- When our webpage is painted then at first buttons (basically html is rendered first) so buttons are unclickale for the time being until JS is rendered.The JS rendering(injection) is called hydration process.
- Well,Fibre improves this hydration process

### Reconcillation :

- It is a high-level description of React's reconcillation algorithm.It is the algorithm React uses to differentiate one tree(Browser DOM) with another(DOM created using .createRoot()) to determine which parts need to be changed.

- update :
  A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.

- The central idea of React's API is to think of updates as if they cause the entire app to re-render. This allows the developer to reason declaratively, rather than worry about how to efficiently transition the app from any particular state to another (A to B, B to C, C to A, and so on).

- Actually re-rendering the entire app on each change only works for the most trivial apps; in a real-world app, it's prohibitively costly in terms of performance. React has optimizations which create only the `appearance` of whole app re-rendering while maintaining great performance. The bulk of these optimizations are part of a process called `reconciliation`.

- Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

### Although Fiber is a ground-up rewrite of the reconciler, the high-level algorithm described in the React docs will be largely the same. The key points are:

- Different component types are assumed to generate substantially different trees. React will not attempt to diff them, but rather replace the old tree completely.
- Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."
- In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.
- Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.
- A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.

### What is a fiber?

- We're about to discuss the heart of React Fiber's architecture. Fibers are a much lower-level abstraction than application developers typically think about.

- We've established that a primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to

- pause work and come back to it later.
- assign priority to different types of work.
- reuse previously completed work.
- abort work if it's no longer needed.

# In order to do any of this, we first need a way to break work down into units. In one sense, that's what a fiber is. A fiber represents a unit of work.
