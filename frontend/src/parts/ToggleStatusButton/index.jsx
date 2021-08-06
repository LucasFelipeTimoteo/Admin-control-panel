import React from 'react'
import activityIcon from '../../assets/images/activity.svg'
import './styles.css'

export default function ToggleStatusButton({ toggleStatusAction, user }) {
  return (
    <button
      className='toggle-status-button'
      onClick={() => toggleStatusAction(user)}
    >
      <img src={activityIcon} alt="Toggle user activity" />
    </button>
  )
}
