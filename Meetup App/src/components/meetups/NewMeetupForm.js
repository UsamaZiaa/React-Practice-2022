import {useRef} from 'react'

import Card from "../ui/Card";
import classes from './NewMeetupForm.module.css'

export default function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const enteredTitleValue = titleInputRef.current.value
        const enteredImageValue = imageInputRef.current.value
        const enteredAddressValue = addressInputRef.current.value
        const enteredDescriptionValue = descriptionInputRef.current.value

        const meetupData = {
            title: enteredTitleValue,
            image: enteredImageValue,
            address: enteredAddressValue,
            description: enteredDescriptionValue
        }

        // console.log(meetupData);
        props.onAddMeetup(meetupData)
    }

  return (<Card>
    <form className={classes.form} onSubmit={onSubmitHandler}>
        <div className={classes.control}>
            <label htmlFor="title">Meetup Title</label>
            <input type="text" required id="title" ref={titleInputRef}/>
        </div>
        <div className={classes.control}>
            <label htmlFor="image">Meetup Image</label>
            <input type="url" required id="image" ref={imageInputRef}/>
        </div>
        <div className={classes.control}>
            <label htmlFor="address">Meetup Address</label>
            <input type="text" required id="address" ref={addressInputRef}/>
        </div>
        <div className={classes.control}>
            <label htmlFor="description">Description</label>
            <textarea id="description" rows="5" required ref={descriptionInputRef}></textarea>
        </div>
        <div className={classes.actions}>
            <button>Add Meetup</button>
        </div>
    </form>
  </Card>
  )
}
