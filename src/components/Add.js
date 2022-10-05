import {
  Box,
  Modal,
  Tooltip,
  styled,
  Typography,
  Avatar,
  TextField,
  ButtonGroup,
  Button,
} from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ImageIcon from "@mui/icons-material/Image";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DateRangeIcon from "@mui/icons-material/DateRange";
import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Stack } from "@mui/system";
import useFetchPosts from "../hooks/useFetchPosts";

const Sytledmodal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "10px",
});
const Add = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);

  const { data, addPost } = useFetchPosts();
  console.log("innnn ", data);
  function post() {
    const newPost = {
      id: 5,
      image: file,
      desc: name,
      user: "Anil Dabhoya",
      date: Date.now(),
    };

    addPost(newPost);
    setOpen(false);
  }

  return (
    <>
      {/* <Box flex={4} p={2}>
        {data.map((elm) => (
          <Post key={elm.id} post={elm} />
        ))}
      </Box> */}
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add"
        sx={{
          position: "fixed",
          bottom: "20px",
          left: { xs: "calc(50%)", md: 30 },
        }}
      >
        <Fab size="medium" color="secondary" aria-label="add">
          <AddIcon style={{ color: "red !important", fontSize: "30px" }} />
        </Fab>
      </Tooltip>
      <Sytledmodal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              src="https://material-ui.com/static/images/avatar/3.jpg"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500}>John Doe</Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            hiddenLabel
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
            onChange={(e) => setName(e.target.value)}
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon color="primary" />
            <label>
              <ImageIcon color="secondary" />
              <input
                type="file"
                style={{ height: "0", width: "0" }}
                onChange={(e) => setFile(e.target.files)}
              />
            </label>

            <VideoCameraBackIcon color="success" />
            <PersonAddIcon color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button onClick={() => post()}>Post</Button>
            <Button>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </Sytledmodal>
    </>
  );
};

export default Add;
