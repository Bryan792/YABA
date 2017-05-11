import { createAction } from 'redux-actions'

export const LOAD_EDT = 'LOAD_EDT'
export const LOAD_EDT_SUCCESS = 'LOAD_EDT_SUCCESS'

export const loadEdtSuccess = createAction(LOAD_EDT_SUCCESS)

export const loadEdt = (station = 'ALL') => (dispatch, getState) => {
    fetch(`https://api.bart.gov/api/etd.aspx?cmd=etd&orig=${station}&key=MW9S-E7SL-26DU-VV8V&json=y`)
      .then(response => response.json())
      .then(response => dispatch(loadEdtSuccess(response)))
}
