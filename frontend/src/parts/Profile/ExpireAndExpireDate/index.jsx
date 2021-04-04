import React, { useEffect } from 'react'

export default function ExpireAndExpiredate({
  expire,
  shouldExpire,
  shouldNotExpire,
  resetExpireDate,
  expireDate,
  handleExpireDate,
  editUserdata,
  handleEditUserDataExpire,
  handleEditUserDataExpireDate
}) {

  console.log(editUserdata)
  useEffect(() => {
    if (editUserdata.hasOwnProperty('expire')) {
      handleEditUserDataExpire(editUserdata.expire)
    }

    if (editUserdata.expireDate) {
      handleEditUserDataExpireDate(editUserdata.expireDate)
    }
  }, [editUserdata, handleEditUserDataExpireDate, handleEditUserDataExpire])

  return (
    <>
      <label>Expire</label>
      <div>
        <input type="radio"
          name="expire"
          id="expire"
          checked={editUserdata.expire || expire}
          onChange={shouldExpire}
        />
        <label htmlFor="expire">Yes</label>

        <input type="radio"
          name="not-expire"
          id="not-expire"
          checked={
            (editUserdata.expire && !editUserdata.expire) || !expire
          }
          onChange={shouldNotExpire}
          onClick={resetExpireDate}
        />
        <label htmlFor="not-expires">Never</label>
      </div>

      {
        expire &&
        <>
          <label htmlFor="expire-date">Expire Date</label>
          <input
            type="date"
            name="expire-date"
            id="expire-date"
            value={editUserdata.expireDate || expireDate}
            onChange={handleExpireDate}
            required={expire}
          />
        </>
      }
    </>
  )
}
