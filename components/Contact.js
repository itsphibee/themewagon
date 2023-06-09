import React, { Component } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, FormLabel } from "@mui/material";

export class Contact extends Component {
  render() {
    return (
      <Container pl={30} pr={30} pb={20}>
        <Typography
          variant="h3"
          textAlign="center"
          color="#3c3c3c"
          padding={10}
        >
          Get In Touch
        </Typography>
        <Typography textAlign="center" color="#A3778D">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et <br />
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex
        </Typography>

        <Grid container spacing={4}>
          <Grid xs={12} xl={6} padding={10}>
            <Typography variant="h5" pb={3} color="#3B4045">
              Contact Adress
            </Typography>
            <Typography color="#777777" pb={3}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              quos maxime voluptate doloribus, voluptatum nemo vel ipsa in
              eligendi, ullam. Ducimus consequuntur labore error hic.
            </Typography>
            <hr width={400} color="#777777" size={2}></hr>
            <Typography color="#777777" pb={2} pt={2}>
              {" "}
              Dhanmondi 32,
              <br /> Dhaka <br />
              Bangladesh{" "}
            </Typography>
            <hr width={400} color="#777777" size={2}></hr>
            <Typography color="#777777" pt={2}>
              E: hello@foundry.net
              <br /> P: +614
              <br />
              3948 <br />
              2726
            </Typography>
          </Grid>
          <Grid xs={12} xl={6} padding={10}>
            <TextField
              type="text"
              color="#99A5C0"
              variant="filled"
              fullWidth
              defaultValue="Your Name"
              sx={{ mb: 5 }}
            />
            <TextField
              type="text"
              color="#A37777"
              variant="filled"
              fullWidth
              defaultValue="Email Address"
              sx={{ mb: 5 }}
            />
            <TextField
              type="text"
              color="#A37777"
              variant="filled"
              fullWidth
              defaultValue="Your Message"
              sx={{ mb: 5 }}
            />
            <Button variant="contained" size="large" backgroundColor="#47B475">
              Send Me
            </Button>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Contact;
