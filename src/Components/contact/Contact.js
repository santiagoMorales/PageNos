import React from 'react'
import ContactCols from './ContactCols'
import * as ifS from '@fortawesome/free-solid-svg-icons'

function Contact() {
    return (
        <div className="container-fluid">
            <div className="row">
                <ContactCols
                    icon={ifS.faMapMarkerAlt}
                    topic="VISIT OUR OFFICE"
                    content="401 Broadway, 24th Floor New York, NY 10013."
                    link="GET DIRECTION" />
                <ContactCols
                    icon={ifS.faMapMarkerAlt}
                    topic="VISIT OUR OFFICE"
                    content="401 Broadway, 24th Floor New York, NY 10013."
                    link="GET DIRECTION" />
                <ContactCols
                    icon={ifS.faMapMarkerAlt}
                    topic="VISIT OUR OFFICE"
                    content="401 Broadway, 24th Floor New York, NY 10013."
                    link="GET DIRECTION" />
                <ContactCols
                    icon={ifS.faMapMarkerAlt}
                    topic="VISIT OUR OFFICE"
                    content="401 Broadway, 24th Floor New York, NY 10013."
                    link="GET DIRECTION" />
            </div>
        </div>
    )
}
export default Contact