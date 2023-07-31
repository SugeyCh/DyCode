import { Navbar, Dropdown, Button, Link, Row, Modal, Input, Popover, Text  } from "@nextui-org/react"
import React, { useState, useEffect } from "react"
import toast, { Toaster }             from 'react-hot-toast'
import Image                          from "next/image"
import { Layout }                     from "./Layout.jsx"
import { icons }                      from "./Icons.jsx"
import instance                       from "@/src/conn/axios.js"
import logo                           from '@/pub/images/logo-dycode.jpg'
import styles                         from '@/sty/nav.module.css'
import { removeCookie }               from "../cookies.tsx"

export default function Nav ({ email }) {
  const [ rows, setRows ]     = useState([])
  const [visible, setVisible] = useState(false)
  const [show, setShow]       = useState(false)
  const [save, setSave]       = useState(false)
  const [width, setWidth]     = useState("50%")

  const notifySucces = (msg) => { toast.success(msg) }
  const notifyError  = (msg) => { toast.error(msg) }

  const handler = () => {
    if (window.innerWidth < 768) { setWidth("90%") }
    setVisible(true)
  }

  const edit = () => {
    if (window.innerWidth < 768) { setWidth("90%") }
    setShow(true)
  }

  const Save = () => {
    if (window.innerWidth < 768) { setWidth("90%") }
    setSave(true)
  }

  const closeHandler = () => { setVisible(false) }
  const close = () => { setShow(false) }
  const exit = () => { setSave(false) }
  
  const logout = () => {
    removeCookie('email')
  }

  useEffect(() => {
    instance.get(`/dycode/view/user/${email}/`)
    .then((result) => {
      setRows(result.data.name)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [rows])

  const EditUser = () => {
    const correo = document.getElementById('email').value
    const name   = document.getElementById('name').value
    let userUpdate = {
      correo, name
    }
    
    instance.get(`/dycode/view/user/${email}/`)
    .then((result) => {
      instance.patch(`/dycode/users/${result.data.id}/`, userUpdate)
      .then((result) => {
        notifySucces('User updated successfully')
      })
      .catch((err) => {
        notifyError('Error updating')
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }  

  const DeleteUser = () => {
    instance.get(`/dycode/view/user/${email}/`)
    .then((result) => {
      instance.delete(`/dycode/delete/user/${result.data.id}/`)
      .then((result) => {
        console.log(result)
      })
      .catch((err) => {
        notifySucces('User deleted successfully')
        window.location.assign('/login')
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const Project = () => {
    const name  = document.getElementById('project').value
    const field = document.getElementById('url').value
    

    instance.get(`/dycode/view/user/${email}/`)
    .then((result) => {
      let project = {
        'name': name, 
        'field': field,
        'user': result.data.id
      }
      instance.post('/dycode/projects/', project)
      .then((result) => {
        notifySucces('Project created successfully')
      })
      .catch((err) => {
        console.log(err)
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }
  
  return (
    <Layout>
      
      <Modal
        closeButton
        blur
				width={width}
				height='40px'
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18} color="primary" style={{fontWeight: 'bold'}}>
            Share the URL your Code
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Popover placement="bottom-right" isBordered borderWeight='normal'>
            <Popover.Trigger >
              <Input.Password
                size="lg"
						    style={{color: 'rgba(53, 52, 52, 0.795)'}}
                readOnly
                visibleIcon={icons.copied}
                hiddenIcon={icons.copy}
              />
            </Popover.Trigger>
            <Popover.Content>
              <Text css={{ p: "$7" }} color="primary">
                Copied.
              </Text>
            </Popover.Content>
          </Popover>
          <Row justify="space-between"></Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="primary" onPress={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        closeButton
        blur
        width="40%"
        open={show}
        onClose={close}
      >
        <Toaster position="top-right" reverseOrder={true} duration={5000}/>
        <Modal.Header>
          <Text id="modal-title" size={18}>
            My
            <Text b size={18}>
              Profile
            </Text>
          </Text>
        </Modal.Header>
          <Modal.Body>
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              id="name"
              label="Name"
              initialValue={rows}
            />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            id="email"
            label="Email"
            initialValue={email}
          />
        </Modal.Body>
        <Modal.Footer>
          <Row justify="space-between">
            <Button flat onPress={DeleteUser} onClick={logout}>
              Eliminar mi usuario
            </Button>
          </Row>
          <Button auto flat color="error" onPress={close}>
            Close
          </Button>
          <Button auto onPress={EditUser}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        closeButton
        blur
        width="40%"
        open={save}
        onClose={exit}
      >
        <Toaster position="top-right" reverseOrder={true} duration={5000}/>
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Save
            <Text b size={18}>
              Project
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            id="project"
            label="Name of project"
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            id="url"
            label="URL of project"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={exit}>
            Close
          </Button>
          <Button auto onPress={Project}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      <Navbar isBordered variant="sticky">
        <Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          variant="underline"
        >
          <Dropdown isBordered>
            <Navbar.Item>
              <Dropdown.Button
                auto
                light
                css={{
                  px: 0,
                  dflex: "center",
                  svg: { pe: "none" },
                }}
                iconRight={icons.chevron}
                ripple={false}
              >
                <Image src={logo} className={styles.logo2} alt="TIDV Tech Logo"/>
                DyCode
              </Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu
              css={{
                $$dropdownMenuWidth: "340px",
                $$dropdownItemHeight: "70px",
                "& .nextui-dropdown-item": {
                  py: "$4",
                  // dropdown item left icon
                  svg: {
                    color: "$secondary",
                    mr: "$4",
                  },
                  // dropdown item title
                  "& .nextui-dropdown-item-content": {
                    w: "100%",
                    fontWeight: "$semibold",
                  },
                },
              }}
            >
              <Dropdown.Item
                key="profile"
                showFullDescription
                icon={icons.profile}
              >
                <span onClick={edit}>My profile</span>
              </Dropdown.Item>
              <Dropdown.Item
                key="friends"
                showFullDescription
                icon={icons.friends}
              >
                Friends
              </Dropdown.Item>
              <Dropdown.Item
                key="my_workspace"
                showFullDescription
                icon={icons.myworkspace}
              >
                My workspaces
              </Dropdown.Item>
              <Dropdown.Item
                key="save_workspace"
                showFullDescription
                icon={icons.saveworkspace}
                css={{paddingLeft: "15px"}}
              >
                <span onClick={Save}>Save workspace</span> 
              </Dropdown.Item>
              <Dropdown.Item
                key="invite_friends"
                showFullDescription
                icon={icons.invite}
              >
                Invite friends
              </Dropdown.Item>
              <Dropdown.Item
                key="share_workspace"
                showFullDescription
                icon={icons.share}
              >
                <span onClick={handler}>Share my workspace</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
        </Navbar.Brand>
        
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            <span>{ email }</span>
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              <Link href="/login" title="Log out" onClick={ logout }>Log Out</Link>
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </Layout>
  )
}