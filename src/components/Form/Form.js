import React from 'react'
import { connect } from 'react-redux'
import { Button } from '../Button/Button'
import Input from '../Input/Input'
import { Load } from '../Loader/Load'
import { submitRequest, createRequest, hideAlert } from '../../redux/actions'
import { Alert } from '../Alert/Alert'
import { Popup } from '../Popup/Popup'


//Form for searching movises For search you should use English language
// Making a state for the search input would be more correct to use "UseState" but for getting practice with Redux I used "mapStateToProps" in all project

const Form = ({ loading, submit, value, onChange, isAlert, hide, isPopup, disabledBtn }) => {

  return (
    <div>
      {isAlert ? <Alert text={'Что-то не так с сервером, попробуйте повторить запрос'} onClick={hide} /> : null}

      <form style={{ position: 'relative' }}>
        {isPopup ? <Popup text="Fill in the search fields" /> : null}
        <Input type="text" title="Enter the name of movie" value={value} onChange={onChange} />
        <Button type="submit" title="Search movie" onClick={submit} submitData={value} disabled={disabledBtn}></Button>
      </form>
      {loading ? <Load /> : null}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    loading: state.loadChange.loading,
    value: state.inputChange.text,
    isAlert: state.alertControl.isAlert,
    isPopup: state.popup.isPopup,
    disabledBtn: state.disBtn.disabled
  }
}

const mapDispatchToProps = {
  submit: submitRequest,
  onChange: createRequest,
  hide: hideAlert,
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
