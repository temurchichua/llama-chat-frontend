export default function EmptyState({ setOpen, setPrompt }) {
  return (
    <div className="mt-12 sm:mt-24 space-y-6 text-gray-400 text-base mx-8 sm:mx-4 sm:text-2xl leading-12">
      <p>
        {" "}
        For Chatbot Designers - Customize Llama&apos;s personality by clicking the{" "}
        <button
          className="prompt-button inline-flex items-center "
          onClick={() => setOpen(true)}
        >
          settings{" "}
        </button>{" "}
        button.
      </p>
      <p>
        As Tbilisi I can{" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt(
              "I want to know more about Tbilisi"
            )
          }
        >
          tell you about myself
        </button>
        , {" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt("What can I see in Tbilisi?")
          }
        >
          guide you through my streets
        </button>{" "}
        and{" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt(
              "What can I do in Tbilisi?"
            )
          }
        >
          make you love me
        </button>
        ,{" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt(
              "Hey, introduce yourself."
            )
          }
        >
          start a conversation
        </button>
        , or even{" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt(
              "What can you do as a Tbilisi bot?"
            )
          }
        >
          tell you what I can do.
        </button>{" "}
      </p>
      <p>Feel free to click on each of the underlined suggestions or input your own conversation starter below.</p>
    </div>
  );
}
