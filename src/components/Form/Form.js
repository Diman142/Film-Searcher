import React from 'react'
import { connect } from 'react-redux'
import { Button } from '../Button/Button'
import Input from '../Input/Input'
import { Load } from '../Loader/Load'
import { submitRequest, createRequest, hideAlert } from '../../redux/actions'
import { Alert } from '../Alert/Alert'
import { Popup } from '../Popup/Popup'


// Form for searching movises For search you should use English language
// Making a state for the search input would be more correct to use "UseState" but for getting practice with Redux I used "mapStateToProps" in all project

const Form = ({ loading, submit, value, onChange, isAlert, hide, isPopup, disabledBtn }) =>
(
  <div style={{ display: "flex", justifyContent: "center" }}>
    {isAlert ? <Alert text="Закончился лимит запросов к БД" onClick={hide} /> : null}
    <form style={{ position: 'relative' }}>
      {isPopup ? <Popup text="Fill in the search fields" /> : null}
      <Input type="text" title="Unlimited movies, TV shows, and more." value={value} onChange={onChange} note="Watch anywhere. Cancel anytime." />
      <Button type="submit" title="Search" onClick={submit} submitData={value} disabled={disabledBtn} />
    </form>
    {loading ? <Load /> : null}
  </div>
)


const mapStateToProps = (state) => ({
  loading: state.loadChange.loading,
  value: state.inputChange.text,
  isAlert: state.alertControl.isAlert,
  isPopup: state.popup.isPopup,
  disabledBtn: state.disBtn.disabled
})

const mapDispatchToProps = {
  submit: submitRequest,
  onChange: createRequest,
  hide: hideAlert,
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
