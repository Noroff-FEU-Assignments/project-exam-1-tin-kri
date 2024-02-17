export function formValidation() {
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const subject = document.getElementById('subject')
    const message = document.getElementById('message')


    const form = document.getElementById('form')
    const errorElement = document.getElementById('error')

    form.addEventListener('submit', (e) => {
        let messages = []

        if (name.value.length <= 15) {
            messages.push('Name must be more than 15 characters')
        }
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (!emailRegex.test(email.value)) {
            messages.push('Email must be a valid email')
        }

        if (subject.value.length <= 15) {
            messages.push('Subject must be more that 15 characters')
        }

        if (message.value.length <= 25) {
            messages.push('Message must be more that 25 characters')
        }



        if (messages.length > 0) {
            e.preventDefault()
            errorElement.innerText = messages.join(', ')
        }
    })
}



// Source Web Dev Simplified https://www.youtube.com/watch?v=In0nB0ABaUk  