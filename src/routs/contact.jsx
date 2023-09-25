import { BrowserRouter, Form } from "react-router-dom";

export default function Contact() {
  const contact = {
    firstName: "Your",
    lastName: "Name",
    avatar: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1a98f20e-8a78-47cd-a210-498c47064317/ddcyywj-bdd1bdf3-f4f5-4b00-a620-b0898cfa1a50.png/v1/fill/w_250,h_250,q_80,strp/kisa_sohma_by_thetrueslyblue_ddcyywj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjUwIiwicGF0aCI6IlwvZlwvMWE5OGYyMGUtOGE3OC00N2NkLWEyMTAtNDk4YzQ3MDY0MzE3XC9kZGN5eXdqLWJkZDFiZGYzLWY0ZjUtNGIwMC1hNjIwLWIwODk4Y2ZhMWE1MC5wbmciLCJ3aWR0aCI6Ijw9MjUwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.sePCcWZjrv10mRwSMFraZm575mZoWiV6YNztQSRUcNw",
    twitter: "your_handle",
    notes: "Some notes",
    isFavorite: false,
  };

  return (
    <div id="contact">
      <div>
        <img
          key={contact.avatar}
          src={contact.avatar || null}
        />
      </div>

      <div>
        <h1>
          {contact.firstName || contact.lastName ? (
            <>
              {contact.firstName} {contact.lastName}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !window.confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }) {
  // yes, this is a `let` for later
  let isFavorite = contact.isFavorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={isFavorite ? "false" : "true"}
        aria-label={
            isFavorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {isFavorite ? "★" : "☆"}
      </button>
    </Form>
  );
}