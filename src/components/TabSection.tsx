import { useState } from "react";
import { Tabs, Accordion, Button } from "@mantine/core";
import { IconBox, IconCalendarMonth, IconCode, IconFlare, IconInnerShadowBottom, IconReceipt, IconRocket, IconTruck } from "@tabler/icons-react";
import CustomerForm from "./CustomerForm";
import { FormContext } from "../context/FormContext";

export default function TabSection() {

  const [isEditing, setIsEditing] = useState(false);
  const editForm = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsEditing(true);
  }

  return (
    <FormContext.Provider value={{ isEditing, setIsEditing }}>
      <Tabs
        color="orange"
        defaultValue="tms_info"
        mt={'md'}
        styles={{ root: { tabActive: { color: 'orange', background: 'transparent' }}}}
      >
        <Tabs.List>
          <Tabs.Tab
            value="tms_info"
            leftSection={<IconTruck style={{ width: '20px', height: '20px' }} />}
            style={{ padding: '6px 12px', fontSize: '13px' }}
          >
            TMS Info
          </Tabs.Tab>
          <Tabs.Tab
            value="scheduling_info"
            leftSection={<IconCalendarMonth style={{ width: '20px', height: '20px' }} />}
            style={{ padding: '6px 12px', fontSize: '13px' }}
          >
            Scheduling Info
          </Tabs.Tab>
          <Tabs.Tab
            value="labels"
            leftSection={<IconCode style={{ width: '20px', height: '20px' }} />}
            style={{ padding: '6px 12px', fontSize: '13px' }}
            disabled
          >
            Settings
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="tms_info">
          <Accordion variant="contained">
            <Accordion.Item value="customer">
              <Accordion.Control
                icon={<IconInnerShadowBottom />}
                styles={{ label: { display: 'flex', alignItems: 'center' }}}
              >
                Customer
                <Button variant="transparent" color="orange" style={{ fontWeight: 400 }} pt={'2px'} onClick={(e) => editForm(e)}>
                  Edit
                </Button>
              </Accordion.Control>
              <Accordion.Panel>
                <CustomerForm />
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="bill_to">
              <Accordion.Control
                icon={<IconReceipt />}
                styles={{ label: { display: 'flex', alignItems: 'center' }}}
              >
                Bill to
                <Button variant="transparent" color="orange" style={{ fontWeight: 400 }} pt={'2px'}>Edit</Button>
              </Accordion.Control>
              <Accordion.Panel>Content</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="pick_up">
              <Accordion.Control
                icon={<IconBox />}
                styles={{ label: { display: 'flex', alignItems: 'center' }}}
              >
                Pick up
                <Button variant="transparent" color="orange" style={{ fontWeight: 400 }} pt={'2px'}>Edit</Button>
              </Accordion.Control>
              <Accordion.Panel>Content</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="consignee">
              <Accordion.Control
                icon={<IconFlare />}
                styles={{ label: { display: 'flex', alignItems: 'center' }}}
              >
                Consignee
                <Button variant="transparent" color="orange" style={{ fontWeight: 400 }} pt={'2px'}>Edit</Button>
              </Accordion.Control>
              <Accordion.Panel>Content</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="carrier">
              <Accordion.Control
                icon={<IconRocket />}
                styles={{ label: { display: 'flex', alignItems: 'center' }}}
              >
                Carrier
                <Button variant="transparent" color="orange" style={{ fontWeight: 400 }} pt={'2px'}>Edit</Button>
              </Accordion.Control>
              <Accordion.Panel>Content</Accordion.Panel>
            </Accordion.Item>

          </Accordion>
        </Tabs.Panel>

        <Tabs.Panel value="scheduling_info">
          Content
        </Tabs.Panel>

        <Tabs.Panel value="labels">
          Content
        </Tabs.Panel>
      </Tabs>

      { isEditing ? (
        <Button
          variant="filled"
          color="#fe7f51"
          radius={"md"}
          onClick={() => setIsEditing(false)}
          style={{
            margin: '20px auto',
            padding: '10px 140px',
            fontWeight: 'normal',
            display: 'block',
          }}
          >
          Confirm
        </Button>
      ) : null }
    </FormContext.Provider>
  )
}
