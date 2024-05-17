import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Groups() {
  return (
    <div>
    <Accordion>
    <AccordionSummary
      expandIcon={<ArrowDropDownIcon/>}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <Typography>choir</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </Typography>
    </AccordionDetails>
    </Accordion>
    <Accordion>
    <AccordionSummary
      expandIcon={<ArrowDropDownIcon />}
      aria-controls="panel2-content"
      id="panel2-header"
    >
      <Typography>Instruments</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </Typography>
    </AccordionDetails>
    </Accordion>
    <Accordion>
    <AccordionSummary
      expandIcon={<ArrowDropDownIcon />}
      aria-controls="panel2-content"
      id="panel2-header"
    >
      <Typography>Usher</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </Typography>
    </AccordionDetails>
    </Accordion>
    </div>
  )
}

export default Groups

