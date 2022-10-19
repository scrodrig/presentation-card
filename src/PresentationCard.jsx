import avatarImage from './assets/avatar.png'
import './presentationCard.css'

function PresentationCard(){
    let name = 'Schubert'
    return(
        <div className="presentation-card">
            <img src={avatarImage} alt='avatar' className='card-avatar'></img>
           <h3 className='card-about'>Hi, my name is {name} and I'm remembering React</h3>
        </div>
    )
}

export default PresentationCard