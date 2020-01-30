import React, { Component } from "react";

import Select from 'react-select';

import ChannelControls from "./channelcontrols";
import Overlays from "./overlays";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {faLocationArrow} from "@fortawesome/free-solid-svg-icons";
import {faCrosshairs} from "@fortawesome/free-solid-svg-icons";

import '../style/controls'

class Controls extends Component {

  constructor(props) {
    super();
  }

  render() {

    const {activeStory} = this.props;
    const {deleteOverlay, deleteArrow} = this.props;
    const {storyName, storyText, textEdit} = this.props;
    const {handleStoryName, handleStoryText} = this.props;
    const {handleStoryChange, overlays, arrows} = this.props;
    const {arrowClick, lassoClick, boxClick, drawType} = this.props;

    if (textEdit) {
      return (
			<div>
				<div className="row">
					<div className="col">
						<div>
							<div className="bg-black">
								Waypoint #{activeStory + 1}: 
							</div>
							<button onClick={()=>{
								handleStoryChange(Math.max(0, activeStory - 1))
							}}>
								<FontAwesomeIcon icon={faArrowLeft} />
							</button>
							<button onClick={()=>{
								handleStoryChange(activeStory + 1)
							}}>
								<FontAwesomeIcon icon={faArrowRight} />
							</button>
						</div>
						<input className="width-100" type="text" value={storyName} onChange={handleStoryName}></input>
						<textarea className="width-100" value={storyText} onChange={handleStoryText}></textarea>
					</div>
					<div className="col-1 p-0">
						<div className="btn-group-vertical bg-trans">
							<span id="arrow-switch" className="nav-item arrow-switch">
							<a className="btn" onClick={arrowClick}>
									<FontAwesomeIcon icon={faLocationArrow}
										color={(drawType == 'arrow')? 'blue': 'white'}
									/>
							</a>
							</span>
							<span id="draw-switch" className="nav-item draw-switch">
							<a className="btn" onClick={boxClick}>
									<FontAwesomeIcon icon={faCrosshairs}
										color={(drawType == 'box')? 'blue': 'white'}
									/>
							</a>
							</span>
						</div>
					</div>
				</div>
				<Overlays deleteOverlay={deleteOverlay}
				deleteArrow={deleteArrow}
				overlays={overlays} arrows={arrows}></Overlays>
			</div>
      )
    }

    const {handleSelect, handleChange} = this.props;
    const {activeChanLabel, chanLabel} = this.props;
    const {activeChannels} = this.props;

    return (
      <div>
        <Select
          isMulti={true}
          onChange={handleSelect}
          value={Array.from(activeChanLabel.values())}
          options={Array.from(chanLabel.values())}
        />
        <div>
          <ChannelControls className="ChannelControls"
            channels={ activeChannels }
            handleChange={ handleChange }
          />
        </div>
      </div>
    );
  }
}

export default Controls;
