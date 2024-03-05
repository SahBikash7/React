import PropTypes from "prop-types";

//propTypes typically refers to the property of a React component where you define the expected types for props.
// PropTypes refers to the PropTypes library provided by React for defining the types of props.

//props makes the same component more usable.

// Every components have access of props.

// The values which we pass while rendering the component as html are passed into this props which is an object as the key value pair.

/*

  function Card(props){
     console.log("props", props); //props is an object which has prototypes in double-square bracket which means those prototypes are not accessible...
    console.log(props.username);
  }

*/

function Card({ username = "defaultUsernameIsHello" }) {
  console.log(username);
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{username}</h1>
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
          View Profile →
        </button>
      </div>
    </div>
  );
}

Card.propTypes = { username: PropTypes.string };

export default Card;
