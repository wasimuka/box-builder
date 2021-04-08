import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Boxes from './Boxes/Boxes';
import Items from './Items/Items';


function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return <Boxes />;
        case 1:
            return <Items />;
        case 2:
            return 'You can select different cards';
        default:
            return 'Place your order';
    }
}

export default function BoxBuilder() {
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = ['Choose Your Box Colour', 'Choose Your Item', 'Select Your Card', 'Place Your Order'];
    const handleJump = (n)=>{
        setActiveStep(n);
    }

    return (
        <div className="root">
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel onClick={()=>handleJump(index)}><span className={"step"}>STEP {index + 1}</span><span>{label}</span></StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {getStepContent(activeStep)}
                
            </div>
        </div>
    );
}