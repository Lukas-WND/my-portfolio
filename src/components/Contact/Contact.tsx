export function Contact() {
  return (
    <section className="relative w-full bg-almond">
      <div className="p-24 min-h-screen flex flex-col justify-center items-center relative">
        <div className="w-full">
          <h2 className="text-9xl text-center">Do you need a Developer?</h2>
          <h3 className="text-6xl font-secondary text-center text-walnut">Let's work together!</h3>
        </div>
        <div className="mt-24">
            <form className="w-full h-10 flex gap-2">
                <input type="text" placeholder="write a message..." className="w-96 h-full px-2 font-secondary rounded-md"/>
                <button type="submit" className="bg-rich-black text-white text-lg h-full px-4 rounded-md">Send</button>
            </form>
        </div>
        {/* <div className="absolute bottom-0 p-24 w-full flex justify-center items-center gap-24">
            <a href="#" className="text-xl bg-khaki px-10 py-2 rounded-lg">Linkedin</a>
            <a href="#" className="text-xl bg-khaki px-10 py-2 rounded-lg">E-mail</a>
        </div> */}
      </div>
    </section>
  );
}
