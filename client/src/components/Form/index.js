import React from "react"
import "./form.css";

export default function index() {
    return (
        <div className="new-record">
            <form>
                <div class="form-group row">
                    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
                    <div class="col-sm-10">
                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
                    <div class="col-sm-10">
                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
            </form>

        </div>
    )
}
