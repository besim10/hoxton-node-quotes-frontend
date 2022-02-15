
function PostAQuote(){

    
    function addQuoteToServer(newQuote: { firstname: string; lastName: string; photoUrl: string; age: number; quote: string }) {
        fetch(`http://localhost:8000/quotes`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(newQuote)
        })
        .then(resp => resp.json())
    }
    
   const handleSubmit = (e: { target: { firstName: { value: string }; lastName: { value: string }; photoUrl: { value: string }; age: { value: number }; quote: { value: string } } }) =>{
       //@ts-ignore
       e.preventDefault()
       const firstName = e.target.firstName.value
       const lastName = e.target.lastName.value
       const photoUrl = e.target.photoUrl.value
       const age = e.target.age.value
       const quote = e.target.quote.value
        const newQuote = {
            firstname: firstName,
            lastName: lastName,
            photoUrl: photoUrl,
            age: age,
            quote: quote
        }
        addQuoteToServer(newQuote)
   }
    return (
        <section className="quote-detail-wrapper"> 
            <div className="quote-detail-container post-a-quote">
                <h1>Post a quote!</h1>
                <form onSubmit={handleSubmit} className="post-form">
                    <input name = 'firstName'type="text" placeholder='First Name:' />
                    <input name = 'lastName'type="text" placeholder='Last Name:' />
                    <input name='photoUrl' type="text" placeholder='Photo url:' />
                    <input name='age' type= 'number' placeholder='Age:' />
                    <textarea name="quote" id="quote" cols={30} rows={10} placeholder = 'Quote:'></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    )
}
export default PostAQuote

