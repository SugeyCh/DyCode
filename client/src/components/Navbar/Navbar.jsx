import React, { useState } from "react"
import Image               from "next/image"
import { Layout }          from "./Layout.jsx"
import { icons }           from "./Icons.jsx"
import logo                from '@/pub/images/logo-dycode.jpg'
import styles              from '@/sty/nav.module.css'
import { removeCookie }    from "../cookies.tsx"
import { Navbar, Dropdown, Button, Link, Text } from "@nextui-org/react"
import { Modal, Input, Row, Popover }           from "@nextui-org/react"

export default function Nav ({ email }) {
  const [visible, setVisible] = useState(false)
  const [showNav, setShowNav] = useState(false)
  const [width, setWidth]     = useState("50%")

  const handler = () => {
    if (window.innerWidth < 768) { setWidth("90%") }
    setVisible(true)
  }
  const closeHandler = () => { setVisible(false) }
  
  const logout = () => {
    removeCookie('email')
  }

  console.log(email)

  return (
    <Layout>
      <Modal
        closeButton
        aria-labelledby="modal-title"
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
                My profile
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
                Save workspace
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
        
        <Navbar.Content className={`${!showNav ? "hidden" : ""}`}>
          <Navbar.Link color="inherit" href="#">
            { email }  
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