/* eslint-disable react/button-has-type */
/* eslint-disable react/state-in-constructor */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from "react";

export class CreateProject extends Component {
    state = {};

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", this.state);
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };

    render() {
        return (
            <div className="container">
                <form
                    onSubmit={this.handleSubmit}
                    className="white"
                >
                    <h5 className="grey-text darken-3">Create project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <input
                            type="text"
                            id="content"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">
                            Create Project
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
