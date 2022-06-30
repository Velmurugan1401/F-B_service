import "../styles/report.css";

function Reports() {
  return (
    <div className="Billing mt-4">
      <div className="reports">
        <h4 className="modal-title text-uppercase" id="myModalLabel">
          Report View Access
        </h4>
        <div className="modal-body mt-3">
          <div className="form-group">
            <label for="pass_code ">Pass Code</label>
            <input
              type="password"
              className="mt-1 form-control kb-pad ui-keyboard-input ui-widget-content ui-corner-all ui-keyboard-autoaccepted"
              id="pass_code"
              name="pass_code"
              value=""
              aria-haspopup="true"
              role="textbox"
            />
          </div>
        </div>
        <div className="modal-footer mt-5 border-top">
          <input
            type="submit"
            name="submit"
            value=" Submit"
            className="btn btn-primary submit mt-2"
          />
        </div>
      </div>
    </div>
  );
}

export default Reports;
