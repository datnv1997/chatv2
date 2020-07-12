import React from 'react'

export default function FrameChat({ totalClientsOnline, arrayMsg }) {
    return (
        <div className="main">
            <div className="tab-content" id="nav-tabContent">
                {/* Start of Babble */}
                <div className="babble tab-pane fade active show" id="list-chat" role="tabpanel" aria-labelledby="list-chat-list">
                    {/* Start of Chat */}
                    <div className="chat" id="chat1">
                        <div className="top">
                            <div className="container">
                                <div className="col-md-12">
                                    <div className="inside">
                                        <a href="#"><img className="avatar-md" src="dist/img/avatars/avatar-female-5.jpg" data-toggle="tooltip" data-placement="top" title="Keith" alt="avatar" /></a>
                                        <div className="status">
                                            <i className="material-icons online">fiber_manual_record</i>
                                        </div>
                                        <div className="data">
                                            <h5><a href="#">IZZI</a></h5>
                                            <span>Active now</span>
                                        </div>
                                        <button className="btn connect d-md-block d-none" name={1}><i className="material-icons md-30">phone_in_talk</i></button>
                                        <button className="btn connect d-md-block d-none" name={1}><i className="material-icons md-36">videocam</i></button>
                                        <button className="btn d-md-block d-none"><i className="material-icons md-30">info</i></button>
                                        <div className="dropdown">
                                            <button className="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="material-icons md-30">more_vert</i></button>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <button className="dropdown-item connect" name={1}><i className="material-icons">phone_in_talk</i>Voice Call</button>
                                                <button className="dropdown-item connect" name={1}><i className="material-icons">videocam</i>Video Call</button>
                                                <hr />
                                                <button className="dropdown-item"><i className="material-icons">clear</i>Clear History</button>
                                                <button className="dropdown-item"><i className="material-icons">block</i>Block Contact</button>
                                                <button className="dropdown-item"><i className="material-icons">delete</i>Delete Contact</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content" id="content">
                            <div className="container">
                                <div className="col-md-12">
                                    <div className="date">
                                        <hr />
                                        <span>{totalClientsOnline}</span>
                                        <hr />
                                    </div>
                                    {
                                        arrayMsg.map((item, i) => {
                                            if (this.state.dataCurrentConnection.id == item.dataCurrentConnection.id) {
                                                return (
                                                    <div className="message me">
                                                        <div className="text-main">
                                                            <div className="text-group me">
                                                                <div className="text me">
                                                                    <p>{item.msg}</p>
                                                                </div>
                                                            </div>
                                                            {/* <span><i class="material-icons">check</i>{item.dataCurrentConnection.name}</span> */}
                                                        </div>
                                                    </div>
                                                )
                                            } else {
                                                return (
                                                    <div className="message" key={i}>
                                                        <img className="avatar-md" src={item.dataCurrentConnection.photo} data-toggle="tooltip" data-placement="top" title="Keith" alt="avatar" />
                                                        <div className="text-main">
                                                            <span>{item.dataCurrentConnection.name}</span>
                                                            <div className="text-group">
                                                                <div className="text">
                                                                    <p>{item.msg}</p>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                )
                                            }
                                        }
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="col-md-12">
                                <div className="bottom">
                                    <form className="position-relative w-100">
                                        <textarea className="form-control" id="content-chat" placeholder="Start typing for reply..." rows={1} defaultValue={""} />
                                        <button className="btn emoticons"><i className="material-icons">insert_emoticon</i></button>
                                        {/* <button type="submit" className="btn send"><i className="material-icons">send</i></button> */}
                                    </form>
                                    <label>
                                        <input type="file" />
                                        <span className="btn attach d-sm-block d-none"><i className="material-icons">attach_file</i></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End of Chat */}
                    {/* Start of Call */}
                    <div className="call" id="call1">
                        <div className="content">
                            <div className="container">
                                <div className="col-md-12">
                                    <div className="inside">
                                        <div className="panel">
                                            <div className="participant">
                                                <img className="avatar-xxl" src="dist/img/avatars/avatar-female-5.jpg" alt="avatar" />
                                                <span>Connecting</span>
                                            </div>
                                            <div className="options">
                                                <button className="btn option"><i className="material-icons md-30">mic</i></button>
                                                <button className="btn option"><i className="material-icons md-30">videocam</i></button>
                                                <button className="btn option call-end"><i className="material-icons md-30">call_end</i></button>
                                                <button className="btn option"><i className="material-icons md-30">person_add</i></button>
                                                <button className="btn option"><i className="material-icons md-30">volume_up</i></button>
                                            </div>
                                            <button className="btn back" name={1}><i className="material-icons md-24">chat</i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End of Call */}
                </div>
                {/* End of Babble */}
                {/* Start of Babble */}
                <div className="babble tab-pane fade" id="list-empty" role="tabpanel" aria-labelledby="list-empty-list">
                    {/* Start of Chat */}
                    <div className="chat" id="chat2">
                        <div className="top">
                            <div className="container">
                                <div className="col-md-12">
                                    <div className="inside">
                                        <a href="#"><img className="avatar-md" src="dist/img/avatars/avatar-female-2.jpg" data-toggle="tooltip" data-placement="top" title="Lean" alt="avatar" /></a>
                                        <div className="status">
                                            <i className="material-icons offline">fiber_manual_record</i>
                                        </div>
                                        <div className="data">
                                            <h5><a href="#">Lean Avent</a></h5>
                                            <span>Inactive</span>
                                        </div>
                                        <button className="btn connect d-md-block d-none" name={2}><i className="material-icons md-30">phone_in_talk</i></button>
                                        <button className="btn connect d-md-block d-none" name={2}><i className="material-icons md-36">videocam</i></button>
                                        <button className="btn d-md-block d-none"><i className="material-icons md-30">info</i></button>
                                        <div className="dropdown">
                                            <button className="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="material-icons md-30">more_vert</i></button>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <button className="dropdown-item connect" name={2}><i className="material-icons">phone_in_talk</i>Voice Call</button>
                                                <button className="dropdown-item connect" name={2}><i className="material-icons">videocam</i>Video Call</button>
                                                <hr />
                                                <button className="dropdown-item"><i className="material-icons">clear</i>Clear History</button>
                                                <button className="dropdown-item"><i className="material-icons">block</i>Block Contact</button>
                                                <button className="dropdown-item"><i className="material-icons">delete</i>Delete Contact</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content empty">
                            <div className="container">
                                <div className="col-md-12">
                                    <div className="no-messages">
                                        <i className="material-icons md-48">forum</i>
                                        <p>Seems people are shy to start the chat. Break the ice send the first message.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="col-md-12">
                                <div className="bottom">
                                    <form className="position-relative w-100">
                                        <textarea className="form-control" placeholder="Start typing for reply..." rows={1} defaultValue={""} />
                                        <button className="btn emoticons"><i className="material-icons">insert_emoticon</i></button>
                                        <button type="submit" className="btn send"><i className="material-icons">send</i></button>
                                    </form>
                                    <label>
                                        <input type="file" />
                                        <span className="btn attach d-sm-block d-none"><i className="material-icons">attach_file</i></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End of Chat */}
                    {/* Start of Call */}
                    <div className="call" id="call2">
                        <div className="content">
                            <div className="container">
                                <div className="col-md-12">
                                    <div className="inside">
                                        <div className="panel">
                                            <div className="participant">
                                                <img className="avatar-xxl" src="dist/img/avatars/avatar-female-2.jpg" alt="avatar" />
                                                <span>Connecting</span>
                                            </div>
                                            <div className="options">
                                                <button className="btn option"><i className="material-icons md-30">mic</i></button>
                                                <button className="btn option"><i className="material-icons md-30">videocam</i></button>
                                                <button className="btn option call-end"><i className="material-icons md-30">call_end</i></button>
                                                <button className="btn option"><i className="material-icons md-30">person_add</i></button>
                                                <button className="btn option"><i className="material-icons md-30">volume_up</i></button>
                                            </div>
                                            <button className="btn back" name={2}><i className="material-icons md-24">chat</i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End of Call */}
                </div>
                {/* End of Babble */}

            </div>
        </div>
    )
}
