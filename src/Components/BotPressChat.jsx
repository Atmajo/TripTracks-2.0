import React, { useEffect } from "react";

const BotPressChat = () => {
  useEffect(() => {
    const botEmbeddedCode = {
      version: "1.9",
      settings: {
        defaultLanguage: "en",
        languages: ["en"],
        description: "",
        id: "a2ef1906-9fb8-4e20-bfe7-07b74de88c54",
        inactivityTimeout: 30,
        botVariables: [],
        userVariables: [],
        nodeRepetitionLimit: 3,
        configVariables: {},
        cognitiveConfigs: {
          openAi: {},
        },
      },
      flows: [
        {
          id: "wf-conversation-end",
          name: "Conversation End",
          startNode: "nd-c0d3bd2c92",
          variables: [],
          links: [
            {
              id: "edg-3cb8028ff6",
              source: "nd-c0d3bd2c92",
              sourcePort: "trs-92c6f93b0c",
              target: "nd-2db7499cc6",
            },
            {
              id: "edg-8a88f687a0",
              source: "nd-2db7499cc6",
              sourcePort: "nd-2db7499cc6",
              target: "nd-d0c2a6be81",
            },
          ],
          nodes: [
            {
              instructions: [],
              defaultTransition: {
                targetNodeId: "nd-d0c2a6be81",
              },
              type: "standard",
              id: "nd-2db7499cc6",
              name: "Handler",
              deletable: true,
              x: 420,
              y: 105,
            },
            {
              comment:
                '<p><strong><span style="font-size: 18px">👋  Before Conversation Ends</span></strong></p><p><br>This workflow is executed when right before the conversation <strong>Ends Explicitly.</strong></p><p></p><p>An <strong>Explicit Ending</strong> happens when a workflow transitions on an <strong>End Node</strong>.</p>',
              type: "comment",
              id: "nd-6d5d3f41dd",
              name: "Comment1",
              deletable: true,
              instructions: [],
              height: 148,
              width: 461,
              x: 105,
              y: -45,
            },
            {
              id: "nd-c0d3bd2c92",
              name: "On_Explicit_Ending",
              type: "entry",
              deletable: false,
              variables: [],
              instructions: [
                {
                  id: "trs-92c6f93b0c",
                  type: "transition",
                  condition: {
                    type: "expression",
                    payload: "true",
                  },
                  destination: {
                    node: "nd-2db7499cc6",
                  },
                },
              ],
              x: 100,
              y: 100,
            },
            {
              id: "nd-d0c2a6be81",
              name: "End",
              type: "end",
              variables: [],
              deletable: false,
              instructions: [
                {
                  id: "trs-7004dbb2b6",
                  type: "transition",
                  condition: {
                    type: "expression",
                    payload: "true",
                  },
                  destination: {
                    node: "END",
                  },
                },
              ],
              x: 780,
              y: 105,
            },
          ],
        },
        {
          id: "wf-timeout",
          name: "Timeout",
          startNode: "nd-9f7f3268ac",
          variables: [],
          links: [
            {
              id: "edg-b0d2adcd13",
              source: "nd-e6c012a652",
              sourcePort: "nd-e6c012a652",
              target: "nd-199fdcf439",
            },
            {
              id: "edg-6d17a0591b",
              source: "nd-9f7f3268ac",
              sourcePort: "trs-0c7a9a0003",
              target: "nd-e6c012a652",
            },
          ],
          nodes: [
            {
              instructions: [],
              defaultTransition: {
                targetNodeId: "nd-199fdcf439",
              },
              type: "standard",
              id: "nd-e6c012a652",
              name: "Handler",
              deletable: true,
              x: 435,
              y: 105,
            },
            {
              comment:
                '<p><strong><span style="font-size: 18px">⌛️  When conversation times out</span></strong></p><p><br>This workflow is executed when the conversation <strong>times out</strong> before it had time to flow to an <strong>End Node</strong>.</p><p></p><p>The <strong>Timeout Delay</strong> is configurable in the <strong>Chatbot Settings.</strong></p><p></p><p>You can use this to inform the user of the situation before ending the conversation.</p>',
              type: "comment",
              id: "nd-441efa6c42",
              name: "Comment1",
              deletable: true,
              instructions: [],
              height: 173,
              width: 401,
              x: 105,
              y: -90,
            },
            {
              id: "nd-9f7f3268ac",
              name: "On_Timeout",
              type: "entry",
              deletable: false,
              variables: [],
              instructions: [
                {
                  id: "trs-0c7a9a0003",
                  type: "transition",
                  condition: {
                    type: "expression",
                    payload: "true",
                  },
                  destination: {
                    node: "nd-e6c012a652",
                  },
                },
              ],
              x: 100,
              y: 100,
            },
            {
              id: "nd-199fdcf439",
              name: "End",
              type: "end",
              variables: [],
              deletable: false,
              instructions: [
                {
                  id: "trs-bf76943d55",
                  type: "transition",
                  condition: {
                    type: "expression",
                    payload: "true",
                  },
                  destination: {
                    node: "END",
                  },
                },
              ],
              x: 795,
              y: 105,
            },
          ],
        },
        {
          id: "wf-error",
          name: "Error",
          startNode: "nd-98dc0bcc87",
          variables: [],
          links: [
            {
              id: "edg-1cb5862648",
              source: "nd-98dc0bcc87",
              sourcePort: "trs-02c7129430",
              target: "nd-58fca56e01",
            },
            {
              id: "edg-1c28c96d6a",
              source: "nd-58fca56e01",
              sourcePort: "nd-58fca56e01",
              target: "nd-e05f59dd66",
            },
          ],
          nodes: [
            {
              comment:
                '<p><strong><span style="font-size: 18px">⛔️  When something goes wrong</span></strong></p><p><br>This workflow is executed when there\'s an <strong>unexpected error</strong> in one of the other workflows.</p><p></p><p>You can use this to inform the user of the situation before ending the conversation.</p>',
              type: "comment",
              id: "nd-8ff3d7d295",
              name: "Comment1",
              deletable: true,
              instructions: [],
              height: 148,
              width: 401,
              x: 90,
              y: -45,
            },
            {
              instructions: [
                {
                  id: "ins-2762f70004",
                  type: "content",
                  content: {
                    type: "text",
                    text: {
                      staticValue:
                        "Sorry, an error occurred. Please try again later",
                      dynamicValue: "",
                      valueType: "static",
                    },
                    typing: {
                      valueType: "static",
                      staticValue: true,
                    },
                  },
                  nodeId: "nd-58fca56e01",
                },
              ],
              defaultTransition: {
                targetNodeId: "nd-e05f59dd66",
              },
              type: "standard",
              id: "nd-58fca56e01",
              name: "Handler",
              deletable: true,
              x: 450,
              y: 120,
            },
            {
              id: "nd-98dc0bcc87",
              name: "On_Error",
              type: "entry",
              deletable: false,
              variables: [],
              instructions: [
                {
                  id: "trs-02c7129430",
                  type: "transition",
                  condition: {
                    type: "expression",
                    payload: "true",
                  },
                  destination: {
                    node: "nd-58fca56e01",
                  },
                },
              ],
              x: 90,
              y: 120,
            },
            {
              id: "nd-e05f59dd66",
              name: "End",
              type: "end",
              variables: [],
              deletable: false,
              instructions: [
                {
                  id: "trs-945140a646",
                  type: "transition",
                  condition: {
                    type: "expression",
                    payload: "true",
                  },
                  destination: {
                    node: "END",
                  },
                },
              ],
              x: 810,
              y: 120,
            },
          ],
        },
        {
          id: "wf-e93d793612",
          name: "❓Answering Questions",
          startNode: "nd-496ba9463b",
          variables: [],
          links: [
            {
              id: "lnk-c831c5181c",
              source: "nd-496ba9463b",
              sourcePort: "trs-1c6c2a7da5",
              target: "nd-88cec1dcac",
            },
            {
              id: "edg-0f8830bcb9",
              source: "nd-0deb1e42e9",
              sourcePort: "trs-3fc2d6edee",
              target: "nd-57c9182b23",
            },
            {
              id: "edg-0e23d677f9",
              source: "nd-0deb1e42e9",
              sourcePort: "nd-0deb1e42e9",
              target: "nd-6591220e2c",
            },
            {
              id: "edg-5faf7afb8a",
              source: "nd-88cec1dcac",
              sourcePort: "nd-88cec1dcac",
              target: "nd-6591220e2c",
            },
            {
              id: "edg-74d0b371f8",
              source: "nd-6591220e2c",
              sourcePort: "nd-6591220e2c",
              target: "nd-0deb1e42e9",
            },
          ],
          nodes: [
            {
              instructions: [],
              defaultTransition: {
                targetNodeId: "nd-0deb1e42e9",
              },
              type: "standard",
              id: "nd-6591220e2c",
              name: "Loop",
              deletable: true,
              x: 960,
              y: -15,
            },
            {
              comment:
                '<p><strong><span style="font-size: 18px">🔨  Debugging Tip</span></strong></p><p><br><span style="font-size: 14px">To see the sources and details of your chatbot\'s answer: </span></p><ul><li><p><span style="font-size: 14px">Click on the message you sent in the Emulator</span></p></li><li><p><span style="font-size: 14px">the Debugger Panel will appear</span></p></li><li><p><span style="font-size: 14px">Click the "Knowledge Query" item in the Debugger</span></p></li></ul><p><span style="font-size: 14px">You can also click the citations to see the original content!</span></p>',
              type: "comment",
              id: "nd-46ba00e5e6",
              name: "Comment3",
              deletable: true,
              instructions: [],
              height: 218,
              width: 461,
              x: 1395,
              y: -150,
            },
            {
              imageUrl:
                "https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/a2ef1906-9fb8-4e20-bfe7-07b74de88c54/media/1611724a-e65d-421c-94bc-570be5b229b9.png",
              originalWidth: 909,
              originalHeight: 374,
              type: "image",
              id: "nd-847337451d",
              name: "Image2",
              deletable: true,
              instructions: [],
              height: 191.425,
              width: 465,
              x: 1395,
              y: 45,
            },
            {
              comment:
                '<p><strong><span style="font-size: 18px">📘  Knowledge Bases &amp; Data Sources</span></strong></p><p></p><p><span style="font-size: 14px">For this demo, we already created a Knowledge Base and added a few URLs from the Botpress website.</span></p><p></p><p><span style="font-size: 14px">Click on "</span><strong><span style="font-size: 14px">Botpress Knowledge</span></strong><span style="font-size: 14px">"</span><strong><span style="font-size: 14px"> </span></strong><span style="font-size: 14px">in the explorer on the left to see how that works.</span></p>',
              type: "comment",
              id: "nd-4a6490fd17",
              name: "Comment1",
              deletable: true,
              instructions: [],
              height: 148,
              width: 386,
              x: 450,
              y: -300,
            },
            {
              youtubeUrl: "https://www.youtube.com/watch?v=GWY5o1vYBpA&",
              type: "video",
              id: "nd-edc0221ce7",
              name: "Video1",
              deletable: true,
              instructions: [],
              height: 200,
              width: 350,
              x: 450,
              y: -135,
            },
            {
              comment:
                '<p><strong><span style="font-size: 18px">💡  How answering questions work</span></strong></p><p></p><p><span style="font-size: 14px">In this demo, the reason the chatbot provided an answer to the question while on a capture card is because </span><strong><span style="font-size: 14px">Knowledge Answering</span></strong><span style="font-size: 14px"> is enabled on the node.</span></p>',
              type: "comment",
              id: "nd-bfdb38f444",
              name: "Comment2",
              deletable: true,
              instructions: [],
              height: 148,
              width: 356,
              x: 945,
              y: 300,
            },
            {
              imageUrl:
                "https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/a2ef1906-9fb8-4e20-bfe7-07b74de88c54/media/b6dbffb4-304e-43a9-9999-bc9ba86248e9.png",
              originalWidth: 747,
              originalHeight: 468,
              type: "image",
              id: "nd-03512926de",
              name: "Image1",
              deletable: true,
              instructions: [],
              height: 225.6,
              width: 360,
              x: 945,
              y: 435,
            },
            {
              instructions: [
                {
                  id: "ins-2747f1f32a",
                  type: "capture",
                  entityId: "prompts://SingleChoice/v1",
                  entityName: "Single Choice",
                  nodeId: "nd-0deb1e42e9",
                  question: {
                    valueType: "dynamic",
                    dynamicValue:
                      "You can ask me another question or explore the other features!",
                    staticValue: "",
                  },
                  validation: {
                    validators: [],
                  },
                  choice: {
                    options: {
                      valueType: "static",
                      staticValue: [
                        {
                          label: "🔎 Explore feature",
                          value: "🔎 Explore feature",
                          enabled: true,
                        },
                      ],
                      dynamicValue: "",
                    },
                  },
                  retry: {
                    maxRetries: 2,
                    retryMessage: {
                      staticValue: "",
                      dynamicValue: "",
                      valueType: "dynamic",
                    },
                  },
                  cancellation: {
                    cancellable: true,
                    confirmCancel: true,
                    confirmCancelMessage: {
                      staticValue: "",
                      dynamicValue: "",
                      valueType: "static",
                    },
                  },
                  handleFailure: false,
                  historyLookback: 0,
                  skipIfAlreadyFilled: false,
                  transitions: [
                    {
                      id: "trs-3fc2d6edee",
                      type: "transition",
                      label: "🔎 Explore feature",
                      condition: {
                        type: "expression",
                        payload: "__CHOICE=🔎 Explore feature",
                      },
                      destination: {
                        node: "nd-57c9182b23",
                      },
                    },
                  ],
                  prompt: {
                    messages: [
                      {
                        role: "system",
                        content:
                          "You are ExtractGPT and your only goal is to generate useful content in JSON format for developers to parse and use. You don't know any other language than JSON.",
                      },
                      {
                        role: "user",
                        content:
                          '```typescript\n/** The user answer to the question "Which one would you like? Choices: [ 1) Red Apple, 2) Yellow Apple, 3) Dark Banana ]" */\ninterface Output = { choice: {{CHOICES_TYPINGS}} }\n```\n\nHere is a conversation between me and a user. Transcript:\n"""\n(...)\nagent: Which one would you like? Choices: [ 1) Red Apple, 2) Yellow Apple, 3) Dark Banana ]\nuser: I will go with the second one please\n"""',
                      },
                      {
                        role: "assistant",
                        content: '{"choice":"Yellow Apple"}',
                      },
                      {
                        role: "user",
                        content:
                          '\nNow, forget about the previous transcripts. These were just examples, don\'t consider those as valid transcripts for this new task.\n\n###\n\nThe current Date is {{CURRENT_DATE_TIME}}.\n\nAt this point of the conversation, I need require the user to fill the output in following JSON output to complete the task.\nIf more than one property, try to extract each of them the best you can.\n\n```typescript\n/** The user answer to the question "{{QUESTION}}" */\ninterface Output = { choice: {{CHOICES_TYPINGS}} }\n```\n\nHere is a conversation between me and a user. Transcript:\n"""\n(...)\n{{TRANSCRIPT}}\n"""\n\nIn the last user message, here are the entities found:\n"""\nENTITIES_IDENTIFIED\n"""\n\nI need you to extract from the conversation transcript above the values the user has provided.\nIf the user has not provided the information I need, I need you to set the value of the missing answer properties to null.\nHave some tolerance to typos and variations in how the user selects from the possible values.\nNow, please reply to me with the above JSON output and nothing but JSON.\nYou should not explain your answer and should not talk back to me. Just JSON.',
                      },
                    ],
                    model: "gpt-3.5-turbo",
                    temperature: 0,
                    signatureVersion: "Jun-2023",
                    signature:
                      "mtK2Lhb0B4CQ5dyrLhQTUVz92IwGSNQFkflVnVEWqN1DvH+02zPs3+OoQ2BUBCNocMeYC/5x/BPvmqVwqftVbZKSvVfFfJGMoAsSDPA5lxl8QDJD0vMOIO5bjuCTSvsoXdOZ8UCWU+trs50tPN+me5VjcLYGnQwWsVLUiqPyK4nJQYyymp9lqrZcedQ6wGoRs5r9ti1OcUy0msfw044O8RDtVo0dl52o6/zF4BAP40rDAwNsNIBSLnH6N1fXEE6Dy2Fe2cK7pKXvPS3ePDJYB2WyQC6M+Ps4Tl4yWN3wa8rVdf3w0bcrF1Wue5Xbyz4mxQ16fajq84xi2jeEKSpVCg==",
                  },
                  kbPriority: {
                    enabled: true,
                    searchScope: "specific",
                    kbs: ["kb-adb40ff594"],
                  },
                },
              ],
              defaultTransition: {
                targetNodeId: "nd-6591220e2c",
              },
              type: "standard",
              id: "nd-0deb1e42e9",
              name: "Answer_Question",
              deletable: true,
              x: 960,
              y: 105,
            },
            {
              id: "nd-496ba9463b",
              name: "Entry",
              type: "entry",
              deletable: false,
              variables: [],
              instructions: [
                {
                  id: "trs-1c6c2a7da5",
                  type: "transition",
                  condition: {
                    type: "expression",
                    payload: "true",
                  },
                  destination: {
                    node: "nd-88cec1dcac",
                  },
                },
              ],
              x: 105,
              y: -135,
            },
            {
              id: "nd-57c9182b23",
              name: "Exit",
              type: "exit",
              variables: [],
              deletable: false,
              instructions: [
                {
                  id: "trs-a1f5451817",
                  type: "transition",
                  condition: {
                    type: "expression",
                    payload: "true",
                  },
                  destination: {
                    node: "#",
                  },
                },
              ],
              x: 1395,
              y: 255,
            },
            {
              id: "nd-88cec1dcac",
              name: "Intro",
              type: "standard",
              deletable: true,
              instructions: [
                {
                  id: "ins-8e1512c380",
                  type: "content",
                  content: {
                    type: "text",
                    text: {
                      valueType: "dynamic",
                      dynamicValue:
                        '💡 Make sure to open the "**❓ Answering Questions**" workflow to follow along this example.',
                      staticValue: "",
                    },
                    typing: {
                      valueType: "static",
                      staticValue: true,
                    },
                  },
                  nodeId: "nd-88cec1dcac",
                },
                {
                  id: "ins-9eb04f1de9",
                  type: "content",
                  content: {
                    type: "text",
                    text: {
                      valueType: "dynamic",
                      dynamicValue:
                        "Alright, let's see how your chatbot can answer questions based on **custom knowledge bases**.\n\nIn this example, we added one Knowledge Base and provided a few website pages from the official Botpress website.\n",
                      staticValue: "",
                    },
                    typing: {
                      valueType: "static",
                      staticValue: true,
                    },
                  },
                  nodeId: "nd-88cec1dcac",
                },
                {
                  id: "ins-cad04ea645",
                  type: "capture",
                  entityId: "prompts://RawInput/v1",
                  entityName: "Raw Input",
                  nodeId: "nd-88cec1dcac",
                  question: {
                    valueType: "dynamic",
                    dynamicValue:
                      'Now, try asking me "What is Botpress?" to see question answering in action.',
                    staticValue: "",
                  },
                  validation: {
                    validators: [],
                  },
                  choice: {
                    options: {
                      staticValue: [],
                      dynamicValue: "",
                      valueType: "static",
                    },
                  },
                  retry: {
                    maxRetries: 2,
                    retryMessage: {
                      staticValue: "",
                      dynamicValue: "",
                      valueType: "dynamic",
                    },
                  },
                  cancellation: {
                    cancellable: true,
                    confirmCancel: true,
                    confirmCancelMessage: {
                      staticValue: "",
                      dynamicValue: "",
                      valueType: "static",
                    },
                  },
                  handleFailure: false,
                  historyLookback: 0,
                  skipIfAlreadyFilled: false,
                  transitions: [],
                  prompt: {
                    messages: [
                      {
                        role: "system",
                        content:
                          "You are ExtractGPT and your only goal is to generate useful content in JSON format for developers to parse and use. You don't know any other language than JSON.",
                      },
                      {
                        role: "user",
                        content:
                          '```typescript\n/** The user answer to the question "undefined" */\ninterface Output = { value: any }\n```\n\nHere is a conversation between me and a user. Transcript:\n"""\n(...)\nagent: undefined\nuser: undefined\n"""',
                      },
                      {
                        role: "assistant",
                        content: "{}",
                      },
                      {
                        role: "user",
                        content:
                          '\nNow, forget about the previous transcripts. These were just examples, don\'t consider those as valid transcripts for this new task.\n\n###\n\nThe current Date is {{CURRENT_DATE_TIME}}.\n\nAt this point of the conversation, I need require the user to fill the output in following JSON output to complete the task.\nIf more than one property, try to extract each of them the best you can.\n\n```typescript\n/** The user answer to the question "{{QUESTION}}" */\ninterface Output = { value: any }\n```\n\nHere is a conversation between me and a user. Transcript:\n"""\n(...)\n{{TRANSCRIPT}}\n"""\n\nIn the last user message, here are the entities found:\n"""\nENTITIES_IDENTIFIED\n"""\n\nI need you to extract from the conversation transcript above the values the user has provided.\nIf the user has not provided the information I need, I need you to set the value of the missing answer properties to null.\nHave some tolerance to typos and variations in how the user selects from the possible values.\nNow, please reply to me with the above JSON output and nothing but JSON.\nYou should not explain your answer and should not talk back to me. Just JSON.',
                      },
                    ],
                    model: "gpt-3.5-turbo",
                    temperature: 0,
                    signatureVersion: "Jun-2023",
                    signature:
                      "KD0vQk3sI4VmD+MFmKH3o+S0WSRS8SWR7I9fwWe6Sqizv3EMuDNCty5nFxwNDZ+eVqPnU8KXDFyszXsw8cGpjZaW2ajGXjJWF2KWfLUIiJrTYwzeK5NIOeGqBCs0BxNs/OetoZk7v/ZX+UG4Swark6svVeOWHh9UHqPxE/8/wrD0z04WNOtGDCRC2XIpIxgCpG02nXzHHwzkKRRViZSQPdzWBmGHfH/bTQNE8+jmVEPD/6tRyz6sfat3BVpRfrCEyzeP0+OjiIdEpqWa6WekiLRVzLb4RRmi7LGEwbMaihxeQur4pPo5KkyQg6ucp170/r2xzsYG8BhoqT1ropom+g==",
                  },
                  kbPriority: {
                    enabled: true,
                    searchScope: "specific",
                    kbs: ["kb-adb40ff594"],
                  },
                },
              ],
              defaultTransition: {
                targetNodeId: "nd-6591220e2c",
              },
              x: 450,
              y: 105,
            },
          ],
          parentFolder: "root",
        },
        {
          id: "wf-f04b76fd98",
          name: "👂 Capturing Information",
          startNode: "nd-c838dbf210",
          variables: [
            {
              id: "var-fe32906f66",
              name: "quantity",
              type: "number",
              description: "",
              scope: "workflow",
            },
            {
              id: "var-69701e3f96",
              name: "date",
              type: "date",
              description: "",
              scope: "workflow",
            },
            {
              id: "var-fc473592d3",
              name: "weight",
              type: "number",
              description: "",
              scope: "workflow",
            },
          ],
          links: [
            {
              id: "lnk-596baf0ae9",
              source: "nd-c838dbf210",
              sourcePort: "trs-59ee8763c5",
              target: "nd-e1938c677f",
            },
            {
              id: "edg-709f9a1828",
              source: "nd-e1938c677f",
              sourcePort: "nd-e1938c677f",
              target: "nd-038c0d1638",
            },
          ],
          nodes: [
            {
              comment:
                '<p><strong><span style="font-size: 18px">🥇 Capture Features</span></strong></p><p></p><p><span style="font-size: 14px">Out of the box, capture cards will:</span></p><ul><li><p><strong>Handle retries</strong> until the value is successfully extracted</p></li><li><p><strong>Convert the value</strong> in the desired variable type and structure</p></li><li><p><strong>Skip asking</strong> the question if the value is already in the variable</p></li><li><p>Look in the <strong>chat transcript</strong> for the answer before asking the user</p></li><li><p>Provide the option for the user to <strong>cancel</strong> the capture</p></li><li><p>Provide a <strong>custom validation</strong> option</p></li></ul>',
              type: "comment",
              id: "nd-7057e954e7",
              name: "Comment1",
              deletable: true,
              instructions: [],
              height: 223,
              width: 521,
              x: 780,
              y: 30,
            },
            {
              imageUrl:
                "http://127.0.0.1:9200/bots/a2ef1906-9fb8-4e20-bfe7-07b74de88c54/media/fc0b56c4-42ff-40a1-ae6b-f38d48cfac91.png",
              originalWidth: 388,
              originalHeight: 508,
              type: "image",
              id: "nd-553e9b7c01",
              name: "Image1",
              deletable: true,
              instructions: [],
              x: 795,
              y: 225,
            },
            {
              youtubeUrl: "https://www.youtube.com/watch?v=EK30zRYwlkg",
              type: "video",
              id: "nd-1f2ac8b724",
              name: "Video1",
              deletable: true,
              instructions: [],
              height: 200,
              width: 350,
              x: 15,
              y: 285,
            },
            {
              id: "nd-c838dbf210",
              name: "Entry",
              type: "entry",
              deletable: false,
              variables: [],
              instructions: [
                {
                  id: "trs-59ee8763c5",
                  type: "transition",
                  condition: {
                    type: "expression",
                    payload: "true",
                  },
                  destination: {
                    node: "nd-e1938c677f",
                  },
                },
              ],
              x: 100,
              y: 100,
            },
            {
              id: "nd-038c0d1638",
              name: "Exit",
              type: "exit",
              variables: [],
              deletable: false,
              instructions: [
                {
                  id: "trs-72d8002baa",
                  type: "transition",
                  condition: {
                    type: "expression",
                    payload: "true",
                  },
                  destination: {
                    node: "#",
                  },
                },
              ],
              x: 450,
              y: 630,
            },
            {
              id: "nd-e1938c677f",
              name: "Standard",
              type: "standard",
              deletable: true,
              instructions: [
                {
                  id: "ins-d4eee1e0f4",
                  type: "content",
                  content: {
                    type: "text",
                    text: {
                      valueType: "dynamic",
                      dynamicValue:
                        '💡 Make sure to open the "**👂 Capturing Information**" workflow to follow along this example.',
                      staticValue: "",
                    },
                    typing: {
                      valueType: "static",
                      staticValue: true,
                    },
                  },
                  nodeId: "nd-e1938c677f",
                },
                {
                  id: "ins-08c18c30e0",
                  type: "content",
                  content: {
                    type: "text",
                    text: {
                      valueType: "dynamic",
                      dynamicValue:
                        "Capturing information can be done using **Capture Cards**.\n\nAll you need to do is chose the type of information you need to capture and Botpress will handle everything else for you.",
                      staticValue: "",
                    },
                    typing: {
                      valueType: "static",
                      staticValue: true,
                    },
                  },
                  nodeId: "nd-e1938c677f",
                },
                {
                  id: "ins-769748db41",
                  type: "content",
                  content: {
                    type: "text",
                    text: {
                      valueType: "dynamic",
                      dynamicValue:
                        'For example, try answering something like **"hmm around sixty seven"** to the question below:',
                      staticValue: "",
                    },
                    typing: {
                      valueType: "static",
                      staticValue: true,
                    },
                  },
                  nodeId: "nd-e1938c677f",
                },
                {
                  id: "ins-0de4feab24",
                  type: "capture",
                  entityId: "prompts://Quantity/v1",
                  entityName: "Quantity",
                  nodeId: "nd-e1938c677f",
                  variableId: "var-fe32906f66",
                  question: {
                    valueType: "dynamic",
                    dynamicValue: "How many people work at your company?",
                    staticValue: "",
                  },
                  validation: {
                    validators: [],
                  },
                  choice: {
                    options: {
                      staticValue: [],
                      dynamicValue: "",
                      valueType: "static",
                    },
                  },
                  retry: {
                    maxRetries: 2,
                    retryMessage: {
                      staticValue: "",
                      dynamicValue: "",
                      valueType: "dynamic",
                    },
                  },
                  cancellation: {
                    cancellable: true,
                    confirmCancel: true,
                    confirmCancelMessage: {
                      staticValue: "",
                      dynamicValue: "",
                      valueType: "static",
                    },
                  },
                  handleFailure: false,
                  historyLookback: 0,
                  skipIfAlreadyFilled: false,
                  transitions: [],
                  prompt: {
                    messages: [
                      {
                        role: "system",
                        content:
                          "You are ExtractGPT and your only goal is to generate useful content in JSON format for developers to parse and use. You don't know any other language than JSON.",
                      },
                      {
                        role: "user",
                        content:
                          '```typescript\n/** The user answer to the question "How many red shirts do you need for the party?" */\ninterface Output = { quantity: number }\n```\n\nHere is a conversation between me and a user. Transcript:\n"""\n(...)\nagent: How many red shirts do you need for the party?\nuser: Myself I need 3 of them, but I think Fred will be coming and he\'ll needs 2\n"""',
                      },
                      {
                        role: "assistant",
                        content: '{"quantity":5}',
                      },
                      {
                        role: "user",
                        content:
                          '\nNow, forget about the previous transcripts. These were just examples, don\'t consider those as valid transcripts for this new task.\n\n###\n\nThe current Date is {{CURRENT_DATE_TIME}}.\n\nAt this point of the conversation, I need require the user to fill the output in following JSON output to complete the task.\nIf more than one property, try to extract each of them the best you can.\n\n```typescript\n/** The user answer to the question "{{QUESTION}}" */\ninterface Output = { quantity: number }\n```\n\nHere is a conversation between me and a user. Transcript:\n"""\n(...)\n{{TRANSCRIPT}}\n"""\n\nIn the last user message, here are the entities found:\n"""\nENTITIES_IDENTIFIED\n"""\n\nI need you to extract from the conversation transcript above the values the user has provided.\nIf the user has not provided the information I need, I need you to set the value of the missing answer properties to null.\nHave some tolerance to typos and variations in how the user selects from the possible values.\nNow, please reply to me with the above JSON output and nothing but JSON.\nYou should not explain your answer and should not talk back to me. Just JSON.',
                      },
                    ],
                    model: "gpt-3.5-turbo",
                    temperature: 0,
                    signatureVersion: "Jun-2023",
                    signature:
                      "hm4lRpt49Gl2hDwct2KCnHwjejCmhKXIdvRR1cT125bFs25ak5OKchAwuwSaGu6zU4n2UiZx9xhQJAqT3d/EvgAqUX2q8g7hNH1S7ckFGyJwgyDxz4+C66/UYqlLKCmdu9z2qayZEYXQXUJN+d158PnrAPc3oZDmyz9GsXP344ecOWDRwbkZ8HWEBTEIeGQDjw9HGy14V90R1otliMqcL5tN98qrqNzPazgrKzo4wUoMy3emjlk62lr2HLGxi1w/ymMDFNRfY3d/CYMdEQJzI0krzhep6jxGFgZkR5BUdNZ8L7qdtejHq6wFJnQHu5BdxttkUAe7IyqJNj8/BtVMfQ==",
                  },
                  kbPriority: {
                    enabled: false,
                    searchScope: "all",
                    kbs: [],
                  },
                },
                {
                  id: "ins-d1a94960a1",
                  type: "content",
                  content: {
                    type: "text",
                    text: {
                      valueType: "dynamic",
                      dynamicValue:
                        'The answer you gave me is "**{{workflow.quantity}}**".',
                      staticValue: "",
                    },
                    typing: {
                      valueType: "static",
                      staticValue: true,
                    },
                  },
                  nodeId: "nd-e1938c677f",
                },
                {
                  id: "ins-cff7c4a803",
                  type: "content",
                  content: {
                    type: "text",
                    text: {
                      valueType: "dynamic",
                      dynamicValue:
                        'Additionally, Botpress can extract more complex variable types such as **relative dates**.\n\nTry answering something like "**in five days at 8pm**" to the next question.',
                      staticValue: "",
                    },
                    typing: {
                      valueType: "static",
                      staticValue: true,
                    },
                  },
                  nodeId: "nd-e1938c677f",
                },
                {
                  id: "ins-677c887e68",
                  type: "capture",
                  entityId: "prompts://DateTime/v1",
                  entityName: "Datetime",
                  nodeId: "nd-e1938c677f",
                  variableId: "var-69701e3f96",
                  question: {
                    staticValue: "",
                    dynamicValue: "When (date)?",
                    valueType: "dynamic",
                  },
                  validation: {
                    validators: [],
                  },
                  choice: {
                    options: {
                      staticValue: [],
                      dynamicValue: "",
                      valueType: "static",
                    },
                  },
                  retry: {
                    maxRetries: 2,
                    retryMessage: {
                      staticValue: "",
                      dynamicValue: "",
                      valueType: "dynamic",
                    },
                  },
                  cancellation: {
                    cancellable: true,
                    confirmCancel: true,
                    confirmCancelMessage: {
                      staticValue: "",
                      dynamicValue: "",
                      valueType: "static",
                    },
                  },
                  handleFailure: false,
                  historyLookback: 0,
                  skipIfAlreadyFilled: false,
                  transitions: [],
                  prompt: {
                    messages: [
                      {
                        role: "system",
                        content:
                          "You are ExtractGPT and your only goal is to generate useful content in JSON format for developers to parse and use. You don't know any other language than JSON.",
                      },
                      {
                        role: "user",
                        content:
                          '```typescript\n/** The user answer to the question "The current year is 2023 and we are in october. When do you want to get a notification about this?" */\ninterface Output = { year: number; month: number; day: number; hours: number; minutes: number }\n```\n\nHere is a conversation between me and a user. Transcript:\n"""\n(...)\nagent: The current year is 2023 and we are in october. When do you want to get a notification about this?\nuser: The 1st of next month at 8am please\n"""',
                      },
                      {
                        role: "assistant",
                        content:
                          '{"year":2023,"month":11,"day":1,"hours":8,"minutes":0}',
                      },
                      {
                        role: "user",
                        content:
                          '\nNow, forget about the previous transcripts. These were just examples, don\'t consider those as valid transcripts for this new task.\n\n###\n\nThe current Date is {{CURRENT_DATE_TIME}}.\n\nAt this point of the conversation, I need require the user to fill the output in following JSON output to complete the task.\nIf more than one property, try to extract each of them the best you can.\n\n```typescript\n/** The user answer to the question "{{QUESTION}}" */\ninterface Output = { year: number; month: number; day: number; hours: number; minutes: number }\n```\n\nHere is a conversation between me and a user. Transcript:\n"""\n(...)\n{{TRANSCRIPT}}\n"""\n\nIn the last user message, here are the entities found:\n"""\nENTITIES_IDENTIFIED\n"""\n\nI need you to extract from the conversation transcript above the values the user has provided.\nIf the user has not provided the information I need, I need you to set the value of the missing answer properties to null.\nHave some tolerance to typos and variations in how the user selects from the possible values.\nNow, please reply to me with the above JSON output and nothing but JSON.\nYou should not explain your answer and should not talk back to me. Just JSON.',
                      },
                    ],
                    model: "gpt-3.5-turbo",
                    temperature: 0,
                    signatureVersion: "Jun-2023",
                    signature:
                      "H+Ugc7TgQBXnkLIKD4IKlzwK5XMjSOYSGXViopq/QY8LrVuC0HtHACyB5UjK5rUav6F9iCAntunKyPjFyz1Saq4VyCtbbhad084zdsisBwOZV28OjMEDgxTeVneR8FzKwtynSXc9579IfOx0bBLWvImojJ+JvPNh8XQZ6gHYqZvbZREsMv2SsdKGlmYjfvv8VgqNWOzgZ1rvtDRQiT7VeG/cl4Mp5FfpdMHic8tjJ2KQ1bvizA88I0t6qliGzXa+RZOvOl6JgD0/gqPUcGCfev9d5F+RGlXP6HX9EicCum2Ouf4BIJnlpxx5qInJ2WaIBKR2PMNcyQETgt239xQxhA==",
                  },
                  kbPriority: {
                    enabled: false,
                    searchScope: "all",
                    kbs: [],
                  },
                },
                {
                  id: "ins-b8ba2e7e5d",
                  type: "content",
                  content: {
                    type: "text",
                    text: {
                      valueType: "dynamic",
                      dynamicValue:
                        'The extracted date: "**{{workflow.date}}**"',
                      staticValue: "",
                    },
                    typing: {
                      valueType: "static",
                      staticValue: true,
                    },
                  },
                  nodeId: "nd-e1938c677f",
                },
                {
                  id: "ins-03dfec2a38",
                  type: "content",
                  content: {
                    type: "text",
                    text: {
                      valueType: "dynamic",
                      dynamicValue:
                        "Finally, Botpress can extract and convert units automatically.",
                      staticValue: "",
                    },
                    typing: {
                      valueType: "static",
                      staticValue: true,
                    },
                  },
                  nodeId: "nd-e1938c677f",
                },
                {
                  id: "ins-587075b8fa",
                  type: "capture",
                  entityId: "prompts://WeightMeasurement/v1",
                  entityName: "Weight Measurement",
                  nodeId: "nd-e1938c677f",
                  variableId: "var-fc473592d3",
                  format: "g",
                  question: {
                    staticValue: "",
                    dynamicValue: "How much do you weight?",
                    valueType: "dynamic",
                  },
                  validation: {
                    validators: [],
                  },
                  choice: {
                    options: {
                      staticValue: [],
                      dynamicValue: "",
                      valueType: "static",
                    },
                  },
                  retry: {
                    maxRetries: 2,
                    retryMessage: {
                      staticValue: "",
                      dynamicValue: "",
                      valueType: "dynamic",
                    },
                  },
                  cancellation: {
                    cancellable: true,
                    confirmCancel: true,
                    confirmCancelMessage: {
                      staticValue: "",
                      dynamicValue: "",
                      valueType: "static",
                    },
                  },
                  handleFailure: false,
                  historyLookback: 0,
                  skipIfAlreadyFilled: false,
                  transitions: [],
                  prompt: {
                    messages: [
                      {
                        role: "system",
                        content:
                          "You are ExtractGPT and your only goal is to generate useful content in JSON format for developers to parse and use. You don't know any other language than JSON.",
                      },
                      {
                        role: "user",
                        content:
                          "```typescript\n/** The user answer to the question \"How much do you weight?\" */\ninterface Output = { value: number; unit: 'mcg' | 'mg' | 'g' | 'kg' | 'mt' | 'oz' | 'lb' | 't' }\n```\n\nHere is a conversation between me and a user. Transcript:\n\"\"\"\n(...)\nagent: How much do you weight?\nuser: I am currently at 164.23, but last year i was over 180!\n\"\"\"",
                      },
                      {
                        role: "assistant",
                        content: '{"value":164.23,"unit":"lb"}',
                      },
                      {
                        role: "user",
                        content:
                          "\nNow, forget about the previous transcripts. These were just examples, don't consider those as valid transcripts for this new task.\n\n###\n\nThe current Date is {{CURRENT_DATE_TIME}}.\n\nAt this point of the conversation, I need require the user to fill the output in following JSON output to complete the task.\nIf more than one property, try to extract each of them the best you can.\n\n```typescript\n/** The user answer to the question \"{{QUESTION}}\" */\ninterface Output = { value: number; unit: 'mcg' | 'mg' | 'g' | 'kg' | 'mt' | 'oz' | 'lb' | 't' }\n```\n\nHere is a conversation between me and a user. Transcript:\n\"\"\"\n(...)\n{{TRANSCRIPT}}\n\"\"\"\n\nIn the last user message, here are the entities found:\n\"\"\"\nENTITIES_IDENTIFIED\n\"\"\"\n\nI need you to extract from the conversation transcript above the values the user has provided.\nIf the user has not provided the information I need, I need you to set the value of the missing answer properties to null.\nHave some tolerance to typos and variations in how the user selects from the possible values.\nNow, please reply to me with the above JSON output and nothing but JSON.\nYou should not explain your answer and should not talk back to me. Just JSON.",
                      },
                    ],
                    model: "gpt-3.5-turbo",
                    temperature: 0,
                    signatureVersion: "Jun-2023",
                    signature:
                      "TGPQr8euMkSlRYMYuzcees3fy2Jfa5349KrfhgMsquP0uijUOOUOWzEQd0iC+59W63bBaGhyHY1dA/nnZTqb5UloQ6QuTaSRNg4AC6pVJ6aBdSGZ4Y3hNFFtLouzRpi2ZJ3H5mu/28h5RWoUe+f+vObnUs9MmXMG+TOaaEoCjWzYLbjgMGjFw5y2258B5jbZ8+IXEUQ6sbSjwke7gxrcQn05J7dYGXSrm5Rk4YOyLWkE7neqMX/Wc6YqB5RITpcf3NPasNfs53DvTav1CarYAEqKyodoLfHSEmUndcCo98fuEmY+u7o2DPQsu3Zr+ZSQcPwKqGmoTPLEdatcYspTVw==",
                  },
                  kbPriority: {
                    enabled: false,
                    searchScope: "all",
                    kbs: [],
                  },
                },
                {
                  id: "ins-e0b253cc35",
                  type: "content",
                  content: {
                    type: "text",
                    text: {
                      valueType: "dynamic",
                      dynamicValue:
                        "The capture was configured to extract grams (g), here's what has been extracted:\n{{workflow.weight}}",
                      staticValue: "",
                    },
                    typing: {
                      valueType: "static",
                      staticValue: true,
                    },
                  },
                  nodeId: "nd-e1938c677f",
                },
              ],
              defaultTransition: {
                targetNodeId: "nd-038c0d1638",
              },
              x: 450,
              y: 100,
            },
          ],
          parentFolder: "root",
        },
        {
          topicId: "tpc-global",
          id: "wf-main",
          name: "Main",
          startNode: "nd-2bb9db230d",
          variables: [],
          links: [
            {
              id: "edg-b086a2a178",
              source: "nd-2bb9db230d",
              sourcePort: "trs-8b0779edc5",
              target: "nd-83a5699645",
            },
            {
              id: "edg-4f5d939270",
              source: "nd-432c872450",
              sourcePort: "nd-432c872450",
              target: "nd-80ac4ff158",
            },
            {
              id: "edg-9cb170acc2",
              source: "nd-b2d053a0c9",
              sourcePort: "nd-b2d053a0c9",
              target: "nd-432c872450",
            },
            {
              id: "edg-917355bc53",
              source: "nd-83a5699645",
              sourcePort: "ins-f3eb10f47e",
              target: "nd-432c872450",
            },
            {
              id: "edg-90c958708e",
              source: "nd-432c872450",
              sourcePort: "trs-0039fe5ca5",
              target: "nd-3b3b0ff361",
            },
            {
              id: "edg-b2896eb9ca",
              source: "nd-432c872450",
              sourcePort: "trs-455f4a1cfd",
              target: "nd-6e45c3f369",
            },
            {
              id: "edg-2d1db47432",
              source: "nd-432c872450",
              sourcePort: "trs-a052997990",
              target: "nd-3a84199f93",
            },
            {
              id: "edg-cf40e66c03",
              source: "nd-432c872450",
              sourcePort: "trs-ac435a834d",
              target: "nd-57821f6e75",
            },
            {
              id: "edg-fee2b4f87d",
              source: "nd-432c872450",
              sourcePort: "trs-88abccb932",
              target: "nd-4aa3ba32f8",
            },
            {
              id: "edg-9ce793d52e",
              source: "nd-432c872450",
              sourcePort: "trs-9847bc3a43",
              target: "nd-9afbeb11e2",
            },
          ],
          nodes: [
            {
              id: "nd-9afbeb11e2",
              deletable: true,
              type: "standard",
              instructions: [
                {
                  id: "ins-63dd3fde6d",
                  type: "content",
                  content: {
                    type: "carousel",
                    items: [
                      {
                        type: "card",
                        title: {
                          valueType: "dynamic",
                          dynamicValue: "Paris",
                          staticValue: "",
                        },
                        subtitle: {
                          valueType: "dynamic",
                          dynamicValue:
                            "The City of Lights is synonymous with luxury, offering world-class dining, high-end shopping, and iconic landmarks such as the Eiffel Tower and Louvre Museum.",
                          staticValue: "",
                        },
                        imageUrl: {
                          staticValue:
                            "https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/a2ef1906-9fb8-4e20-bfe7-07b74de88c54/media/c89023de-9261-4b65-9ec0-a45ac5679ac4.jpeg",
                          valueType: "static",
                        },
                        actions: {
                          valueType: "static",
                          staticValue: [
                            {
                              label: "Paris, France",
                              value:
                                "https://www.google.com/search?client=firefox-b-d&q=Paris%2C+France",
                              action: "url",
                            },
                          ],
                          isExpression: true,
                        },
                      },
                      {
                        type: "card",
                        title: {
                          valueType: "dynamic",
                          dynamicValue: "Tuscany, Italy",
                          staticValue: "",
                        },
                        subtitle: {
                          valueType: "dynamic",
                          dynamicValue:
                            "Tuscany combines luxurious accommodations with picturesque landscapes, renowned vineyards, and fine Italian cuisine.",
                          staticValue: "",
                        },
                        imageUrl: {
                          staticValue:
                            "https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/a2ef1906-9fb8-4e20-bfe7-07b74de88c54/media/00aea12f-fcc7-433d-bbef-820c5f4bd917.jpeg",
                          valueType: "static",
                        },
                        actions: {
                          valueType: "static",
                          staticValue: [
                            {
                              label: "Tuscany, Italy",
                              value:
                                "https://www.google.com/search?client=firefox-b-d&q=Tuscany%2C+Italy",
                              action: "url",
                            },
                          ],
                          isExpression: true,
                        },
                      },
                    ],
                  },
                },
              ],
              defaultTransition: {
                targetNodeId: null,
              },
              name: "Luxury",
              x: 690,
              y: -120,
            },
            {
              id: "nd-4aa3ba32f8",
              deletable: true,
              type: "standard",
              instructions: [
                {
                  id: "ins-9d1a688f29",
                  type: "content",
                  content: {
                    type: "carousel",
                    items: [
                      {
                        type: "card",
                        title: {
                          valueType: "dynamic",
                          dynamicValue: "Moab, Utah, USA",
                          staticValue: "",
                        },
                        subtitle: {
                          valueType: "dynamic",
                          dynamicValue:
                            "Moab is famous for its red rock landscapes and is a mecca for outdoor enthusiasts. Activities include rock climbing, mountain biking, and exploring Arches and Canyonlands National Parks.",
                          staticValue: "",
                        },
                        imageUrl: {
                          staticValue:
                            "https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/a2ef1906-9fb8-4e20-bfe7-07b74de88c54/media/0c9bdf6a-91b4-437f-a4ec-ec3e8a78d3c6.jpeg",
                          valueType: "static",
                        },
                        actions: {
                          valueType: "static",
                          staticValue: [
                            {
                              label: "Utah",
                              value:
                                "https://www.google.com/search?client=firefox-b-d&q=Moab%2C+Utah%2C+USA",
                              action: "url",
                            },
                          ],
                          isExpression: true,
                        },
                      },
                      {
                        type: "card",
                        title: {
                          valueType: "dynamic",
                          dynamicValue: "Nepal",
                          staticValue: "",
                        },
                        subtitle: {
                          valueType: "dynamic",
                          dynamicValue:
                            "Home to the Himalayas, Nepal attracts trekkers and mountaineers from around the world. Everest Base Camp trek and Annapurna Circuit are popular adventures",
                          staticValue: "",
                        },
                        imageUrl: {
                          staticValue:
                            "https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/a2ef1906-9fb8-4e20-bfe7-07b74de88c54/media/738afa9f-3bbd-420a-8857-af982dbf7455.jpeg",
                          valueType: "static",
                        },
                        actions: {
                          valueType: "static",
                          staticValue: [
                            {
                              label: "Nepal",
                              value:
                                "https://www.google.com/search?client=firefox-b-d&q=Nepal",
                              action: "url",
                            },
                          ],
                          isExpression: true,
                        },
                      },
                    ],
                  },
                },
              ],
              defaultTransition: {
                targetNodeId: null,
              },
              name: "Adventure",
              x: 645,
              y: -270,
            },
            {
              id: "nd-57821f6e75",
              deletable: true,
              type: "standard",
              instructions: [
                {
                  id: "ins-6ee260d6f1",
                  type: "content",
                  content: {
                    type: "carousel",
                    items: [
                      {
                        type: "card",
                        title: {
                          valueType: "dynamic",
                          dynamicValue: "New York City, USA",
                          staticValue: "",
                        },
                        subtitle: {
                          valueType: "dynamic",
                          dynamicValue:
                            "As a global financial hub, New York City attracts businesses from various industries. It offers excellent conference facilities, networking opportunities, and a vibrant business atmosphere.",
                          staticValue: "",
                        },
                        imageUrl: {
                          staticValue:
                            "https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/a2ef1906-9fb8-4e20-bfe7-07b74de88c54/media/a049642c-5310-416d-81fc-4b7324109e80.jpeg",
                          valueType: "static",
                        },
                        actions: {
                          valueType: "static",
                          staticValue: [
                            {
                              label: "New York",
                              value: "New York City, USA",
                              action: "url",
                            },
                          ],
                          isExpression: true,
                        },
                      },
                      {
                        type: "card",
                        title: {
                          valueType: "dynamic",
                          dynamicValue: "Singapore",
                          staticValue: "",
                        },
                        subtitle: {
                          valueType: "dynamic",
                          dynamicValue:
                            "Known for its strong economy and strategic location in Asia, Singapore is a major business and financial center. The city-state provides modern infrastructure and a well-developed business ecosystem.",
                          staticValue: "",
                        },
                        imageUrl: {
                          staticValue:
                            "https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/a2ef1906-9fb8-4e20-bfe7-07b74de88c54/media/f40eb0c9-cff6-44a7-a5d5-e3036bb28ebf.jpeg",
                          valueType: "static",
                        },
                        actions: {
                          valueType: "static",
                          staticValue: [
                            {
                              label: "Singapore",
                              value:
                                "https://www.google.com/search?client=firefox-b-d&q=Singapore",
                              action: "url",
                            },
                          ],
                          isExpression: true,
                        },
                      },
                      {
                        type: "card",
                        title: {
                          valueType: "dynamic",
                          dynamicValue: "Hong Kong",
                          staticValue: "",
                        },
                        subtitle: {
                          valueType: "dynamic",
                          dynamicValue:
                            "Hong Kong serves as a gateway to Asia and is a key player in international finance and trade. It offers a dynamic business environment, excellent connectivity, and a well-established conference infrastructure.",
                          staticValue: "",
                        },
                        imageUrl: {
                          staticValue:
                            "https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/a2ef1906-9fb8-4e20-bfe7-07b74de88c54/media/56b9ca30-ba36-4460-a69e-71bb910dd65b.jpeg",
                          valueType: "static",
                        },
                        actions: {
                          valueType: "static",
                          staticValue: [
                            {
                              label: "Hong Kong",
                              value:
                                "https://www.google.com/search?client=firefox-b-d&q=Hong+Kong",
                              action: "url",
                            },
                          ],
                          isExpression: true,
                        },
                      },
                    ],
                  },
                },
              ],
              defaultTransition: {
                targetNodeId: null,
              },
              name: "Business_Trip",
              x: 615,
              y: -435,
            },
            {
              id: "nd-3a84199f93",
              deletable: true,
              type: "standard",
              instructions: [
                {
                  id: "ins-fe514bf8fb",
                  type: "content",
                  content: {
                    type: "carousel",
                    items: [
                      {
                        type: "card",
                        title: {
                          valueType: "dynamic",
                          dynamicValue: "Orlando, Florida, USA",
                          staticValue: "",
                        },
                        subtitle: {
                          valueType: "dynamic",
                          dynamicValue:
                            "Known for its theme parks such as Walt Disney World Resort, Universal Studios, and SeaWorld, Orlando is a popular destination for families with children.",
                          staticValue: "",
                        },
                        imageUrl: {
                          staticValue:
                            "https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/a2ef1906-9fb8-4e20-bfe7-07b74de88c54/media/f190e154-b714-45ac-a2f8-f758de79fb40.jpeg",
                          valueType: "static",
                        },
                        actions: {
                          valueType: "static",
                          staticValue: [
                            {
                              label: "Orlanda, Florida",
                              value: "Orlando, Florida, USA",
                              action: "url",
                            },
                          ],
                          isExpression: true,
                        },
                      },
                      {
                        type: "card",
                        title: {
                          valueType: "dynamic",
                          dynamicValue: "Costa Rica",
                          staticValue: "",
                        },
                        subtitle: {
                          valueType: "dynamic",
                          dynamicValue:
                            "osta Rica is a great destination for families seeking adventure and nature. Explore rainforests, go zip-lining, and visit wildlife reserves.",
                          staticValue: "",
                        },
                        imageUrl: {
                          staticValue:
                            "https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/a2ef1906-9fb8-4e20-bfe7-07b74de88c54/media/59ab3ec1-b1b0-41ef-af33-3ee3f3d08d4d.jpeg",
                          valueType: "static",
                        },
                        actions: {
                          valueType: "static",
                          staticValue: [
                            {
                              label: "Costa Rica",
                              value:
                                "https://www.google.com/search?client=firefox-b-d&q=Costa+Rica",
                              action: "url",
                            },
                          ],
                          isExpression: true,
                        },
                      },
                      {
                        type: "card",
                        title: {
                          valueType: "dynamic",
                          dynamicValue: "Barcelona, Spain",
                          staticValue: "",
                        },
                        subtitle: {
                          valueType: "dynamic",
                          dynamicValue:
                            "Barcelona combines history, culture, and beautiful beaches. Families can explore Gaudí's architecture, visit the Gothic Quarter, and enjoy the Mediterranean atmosphere.",
                          staticValue: "",
                        },
                        imageUrl: {
                          staticValue:
                            "https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/a2ef1906-9fb8-4e20-bfe7-07b74de88c54/media/c8f69dea-ae9c-498d-a13b-9f474af5ecf0.jpeg",
                          valueType: "static",
                        },
                        actions: {
                          valueType: "static",
                          staticValue: [
                            {
                              label: "Barcelona",
                              value:
                                "https://www.google.com/search?client=firefox-b-d&q=Barcelona%2C+Spain",
                              action: "url",
                            },
                          ],
                          isExpression: true,
                        },
                      },
                    ],
                  },
                  nodeId: "nd-3a84199f93",
                },
              ],
              defaultTransition: {
                targetNodeId: null,
              },
              name: "Family_Trip",
              x: 570,
              y: -585,
            },
            {
              instructions: [
                {
                  id: "ins-b741ea9924",
                  type: "content",
                  content: {
                    type: "image",
                  },
                  nodeId: "nd-3b3b0ff361",
                },
                {
                  id: "ins-0e73ee49d8",
                  type: "content",
                  content: {
                    type: "carousel",
                    items: [
                      {
                        type: "card",
                        title: {
                          valueType: "dynamic",
                          dynamicValue: "Chiang Mai, Thailand",
                          staticValue: "",
                        },
                        subtitle: {
                          valueType: "dynamic",
                          dynamicValue:
                            "Known for its affordability, Chiang Mai attracts digital nomads and adventurers. The city offers a mix of cultural experiences, street food, and natural beauty.",
                          staticValue: "",
                        },
                        imageUrl: {
                          staticValue:
                            "https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/a2ef1906-9fb8-4e20-bfe7-07b74de88c54/media/b84a0a34-1961-4c9c-a7b1-8e15f468dc86.jpeg",
                          valueType: "static",
                        },
                        actions: {
                          valueType: "static",
                          staticValue: [
                            {
                              label: "View",
                              value:
                                "https://www.google.com/search?client=firefox-b-d&q=Chiang+Mai%2C+Thailand",
                              action: "url",
                            },
                          ],
                          isExpression: true,
                        },
                      },
                      {
                        type: "card",
                        title: {
                          valueType: "dynamic",
                          dynamicValue: "Tokyo, Japan",
                          staticValue: "",
                        },
                        subtitle: {
                          valueType: "dynamic",
                          dynamicValue:
                            "A blend of traditional and ultra-modern, Tokyo offers unique experiences, technology, anime culture, and vibrant street fashion.",
                          staticValue: "",
                        },
                        imageUrl: {
                          staticValue:
                            "https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/a2ef1906-9fb8-4e20-bfe7-07b74de88c54/media/84fe6084-6cd1-42f4-a33c-c51703767504.jpeg",
                          valueType: "static",
                        },
                        actions: {
                          valueType: "static",
                          staticValue: [
                            {
                              label: "Tokyo",
                              value:
                                "https://www.google.com/search?client=firefox-b-d&q=tokyo%2C+japan",
                              action: "url",
                            },
                          ],
                          isExpression: true,
                        },
                      },
                      {
                        type: "card",
                        title: {
                          valueType: "dynamic",
                          dynamicValue: "Bali, Indonesia",
                          staticValue: "",
                        },
                        subtitle: {
                          valueType: "dynamic",
                          dynamicValue:
                            "Known for its stunning beaches, vibrant nightlife, and a mix of cultural and adventure activities, Bali attracts millennials seeking relaxation and exploration.",
                          staticValue: "",
                        },
                        imageUrl: {
                          staticValue:
                            "https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/a2ef1906-9fb8-4e20-bfe7-07b74de88c54/media/ac7455dc-3644-47fa-bc85-28c5213e193b.jpeg",
                          valueType: "static",
                        },
                        actions: {
                          valueType: "static",
                          staticValue: [
                            {
                              label: "Bali",
                              value:
                                "https://www.google.com/search?client=firefox-b-d&q=Bali%2C+Indonesia",
                              action: "url",
                            },
                          ],
                          isExpression: true,
                        },
                      },
                    ],
                  },
                  nodeId: "nd-3b3b0ff361",
                },
              ],
              defaultTransition: {
                targetNodeId: "nd-b2d053a0c9",
              },
              type: "standard",
              id: "nd-3b3b0ff361",
              name: "Millennials",
              deletable: true,
              x: 480,
              y: -915,
            },
            {
              comment: "<p></p>",
              type: "comment",
              id: "nd-06f2a57c31",
              name: "Comment3",
              deletable: true,
              instructions: [],
              x: -120,
              y: -420,
            },
            {
              comment: "<p></p>",
              type: "comment",
              id: "nd-e14792fa41",
              name: "Comment2",
              deletable: true,
              instructions: [],
              x: 1485,
              y: 645,
            },
            {
              instructions: [],
              defaultTransition: {
                targetNodeId: "nd-432c872450",
              },
              type: "standard",
              id: "nd-b2d053a0c9",
              name: "Back_to_menu",
              deletable: true,
              x: -255,
              y: 255,
            },
            {
              instructions: [
                {
                  id: "ins-05e5415174",
                  type: "capture",
                  entityId: "prompts://MultiChoice/v1",
                  entityName: "Single Choice",
                  nodeId: "nd-432c872450",
                  question: {
                    staticValue: "",
                    dynamicValue:
                      "To get the categories, Please select the category \n",
                    valueType: "dynamic",
                  },
                  validation: {
                    validators: [],
                  },
                  choice: {
                    options: {
                      valueType: "static",
                      staticValue: [
                        {
                          label: {
                            valueType: "dynamic",
                            dynamicValue: "Millennial",
                            staticValue: null,
                          },
                          value: "Millennial",
                          enabled: true,
                        },
                        {
                          label: {
                            valueType: "dynamic",
                            dynamicValue: "Solo Travel",
                            staticValue: null,
                          },
                          value: "Solo Travel",
                          enabled: true,
                        },
                        {
                          label: {
                            valueType: "dynamic",
                            dynamicValue: "Family Trip",
                            staticValue: null,
                          },
                          value: "Family Trip",
                          enabled: true,
                        },
                        {
                          label: {
                            valueType: "dynamic",
                            dynamicValue: "Business Trip",
                            staticValue: null,
                          },
                          value: "Business Trip",
                          enabled: true,
                        },
                        {
                          label: {
                            valueType: "dynamic",
                            dynamicValue: "Adventure",
                            staticValue: null,
                          },
                          value: "Adventure",
                          enabled: true,
                        },
                        {
                          label: {
                            valueType: "dynamic",
                            dynamicValue: "Luxury",
                            staticValue: null,
                          },
                          value: "Luxury",
                          enabled: true,
                        },
                      ],
                      dynamicValue: "",
                    },
                  },
                  retry: {
                    maxRetries: 99,
                    retryMessage: {
                      staticValue: "",
                      dynamicValue: "Please pick one of the choices below",
                      valueType: "dynamic",
                    },
                  },
                  cancellation: {
                    cancellable: false,
                    confirmCancel: false,
                    confirmCancelMessage: {
                      staticValue: "",
                      dynamicValue: "",
                      valueType: "static",
                    },
                  },
                  handleFailure: false,
                  historyLookback: 0,
                  skipIfAlreadyFilled: false,
                  transitions: [
                    {
                      id: "trs-0039fe5ca5",
                      type: "transition",
                      label: "Millennial",
                      condition: {
                        type: "expression",
                        payload: "__CHOICE=Millennial",
                      },
                      destination: {
                        node: "nd-3b3b0ff361",
                      },
                    },
                    {
                      id: "trs-455f4a1cfd",
                      type: "transition",
                      label: "Solo Travel",
                      condition: {
                        type: "expression",
                        payload: "__CHOICE=Solo Travel",
                      },
                      destination: {
                        node: "nd-6e45c3f369",
                      },
                    },
                    {
                      id: "trs-a052997990",
                      type: "transition",
                      label: "Family Trip",
                      condition: {
                        type: "expression",
                        payload: "__CHOICE=Family Trip",
                      },
                      destination: {
                        node: "nd-3a84199f93",
                      },
                    },
                    {
                      id: "trs-ac435a834d",
                      type: "transition",
                      label: "Business Trip",
                      condition: {
                        type: "expression",
                        payload: "__CHOICE=Business Trip",
                      },
                      destination: {
                        node: "nd-57821f6e75",
                      },
                    },
                    {
                      id: "trs-88abccb932",
                      type: "transition",
                      label: "Adventure",
                      condition: {
                        type: "expression",
                        payload: "__CHOICE=Adventure",
                      },
                      destination: {
                        node: "nd-4aa3ba32f8",
                      },
                    },
                    {
                      id: "trs-9847bc3a43",
                      type: "transition",
                      label: "Luxury",
                      condition: {
                        type: "expression",
                        payload: "__CHOICE=Luxury",
                      },
                      destination: {
                        node: "nd-9afbeb11e2",
                      },
                    },
                  ],
                  prompt: {
                    messages: [
                      {
                        role: "system",
                        content:
                          "You are ExtractGPT and your only goal is to generate useful content in JSON format for developers to parse and use. You don't know any other language than JSON.",
                      },
                      {
                        role: "user",
                        content:
                          '```typescript\n/** The user answer to the question "Which one would you like? Choices: [ 1) Red Apple, 2) Yellow Apple, 3) Dark Banana ]" */\ninterface Output = { choices: Array<{{CHOICES_TYPINGS}}> }\n```\n\nHere is a conversation between me and a user. Transcript:\n"""\n(...)\nagent: Which one would you like? Choices: [ 1) Red Apple, 2) Yellow Apple, 3) Dark Banana ]\nuser: I will go with the second one and the banana please\n"""',
                      },
                      {
                        role: "assistant",
                        content: '{"choices":["Yellow Apple","Dark Banana"]}',
                      },
                      {
                        role: "user",
                        content:
                          '\nNow, forget about the previous transcripts. These were just examples, don\'t consider those as valid transcripts for this new task.\n\n###\n\nThe current Date is {{CURRENT_DATE_TIME}}.\n\nAt this point of the conversation, I need require the user to fill the output in following JSON output to complete the task.\nIf more than one property, try to extract each of them the best you can.\n\n```typescript\n/** The user answer to the question "{{QUESTION}}" */\ninterface Output = { choices: Array<{{CHOICES_TYPINGS}}> }\n```\n\nHere is a conversation between me and a user. Transcript:\n"""\n(...)\n{{TRANSCRIPT}}\n"""\n\nIn the last user message, here are the entities found:\n"""\nENTITIES_IDENTIFIED\n"""\n\nI need you to extract from the conversation transcript above the values the user has provided.\nIf the user has not provided the information I need, I need you to set the value of the missing answer properties to null.\nHave some tolerance to typos and variations in how the user selects from the possible values.\n\n\n\nNow, please reply to me with the above JSON output and nothing but JSON.\nYou should not explain your answer and should not talk back to me. Just JSON.',
                      },
                    ],
                    model: "gpt-3.5-turbo",
                    temperature: 0,
                    signatureVersion: "Jun-2023",
                    signature:
                      "hSbVLRZ/6JSGgHAn3FVLlszKfXTtP97MNLVVqMWLOPwPrUBMSYw/wsSE07vPspugeNnqlR+InKv9oKpSS2q6KpT13ez6brbWRc5hMRlSiwgRMrd4AYd72ToN5Jhw574axVG08+xYj3MbKuAcLAmaKKwiJeeqv1iOdBTGf/3zbzxRT9bSC0ohAR74sqC9n5OYxjrd2LtlorBuyBQRywJeukRPk8Q8/PHadU9SFXgfcNxrx8ZZBKKLD9XjMcofihdS3fOaMaDHXJJkhBB73Audmvg8Qa6SbOIWihqGJ+Xa4vLKdtlR5eQxyK0xLZDTNbaiqDzgVb1ZDJXizNB8RYwU9g==",
                  },
                  kbPriority: {
                    enabled: false,
                    searchScope: "all",
                    kbs: [],
                  },
                },
              ],
              defaultTransition: {
                targetNodeId: "nd-80ac4ff158",
              },
              type: "standard",
              id: "nd-432c872450",
              name: "Menu",
              deletable: true,
              x: 90,
              y: 30,
            },
            {
              instructions: [
                {
                  id: "ins-ced680a754",
                  type: "content",
                  content: {
                    type: "carousel",
                    items: [
                      {
                        type: "card",
                        title: {
                          valueType: "dynamic",
                          dynamicValue: "New Zealand",
                          staticValue: "",
                        },
                        subtitle: {
                          valueType: "dynamic",
                          dynamicValue:
                            "With its stunning landscapes, outdoor adventures, and friendly locals, New Zealand is a paradise for solo travelers who love nature and adventure sports.",
                          staticValue: "",
                        },
                        imageUrl: {
                          staticValue:
                            "https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/a2ef1906-9fb8-4e20-bfe7-07b74de88c54/media/a318890d-7dc9-48dd-ab6f-9c03e03332ec.jpeg",
                          valueType: "static",
                        },
                        actions: {
                          valueType: "static",
                          staticValue: [
                            {
                              label: "New Zealand",
                              value:
                                "https://www.google.com/search?client=firefox-b-d&q=New+Zealand",
                              action: "url",
                            },
                          ],
                          isExpression: true,
                        },
                      },
                      {
                        type: "card",
                        title: {
                          valueType: "dynamic",
                          dynamicValue: "Canada",
                          staticValue: "",
                        },
                        subtitle: {
                          valueType: "dynamic",
                          dynamicValue:
                            "Canada is known for its welcoming and friendly atmosphere. Cities like Vancouver and Toronto offer diverse cultural experiences, while the Canadian Rockies provide stunning outdoor adventures.",
                          staticValue: "",
                        },
                        imageUrl: {
                          staticValue:
                            "https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/a2ef1906-9fb8-4e20-bfe7-07b74de88c54/media/682e2194-eaca-474e-a209-3ce3b256365c.jpeg",
                          valueType: "static",
                        },
                        actions: {
                          valueType: "static",
                          staticValue: [
                            {
                              label: "Canada",
                              value:
                                "https://www.google.com/search?client=firefox-b-d&q=Canada",
                              action: "url",
                            },
                          ],
                          isExpression: true,
                        },
                      },
                      {
                        type: "card",
                        title: {
                          valueType: "dynamic",
                          dynamicValue: "Portugal",
                          staticValue: "",
                        },
                        subtitle: {
                          valueType: "dynamic",
                          dynamicValue:
                            "Portugal is known for its friendly locals, affordable prices, and a rich history. Cities like Lisbon and Porto are filled with charm, and the coastal areas offer picturesque scenery.",
                          staticValue: "",
                        },
                        imageUrl: {
                          staticValue:
                            "https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/a2ef1906-9fb8-4e20-bfe7-07b74de88c54/media/879a6af8-cffe-4421-806e-e4465c02c549.jpeg",
                          valueType: "static",
                        },
                        actions: {
                          valueType: "static",
                          staticValue: [
                            {
                              label: "Portugal",
                              value:
                                "https://www.google.com/search?client=firefox-b-d&q=Portugal",
                              action: "url",
                            },
                          ],
                          isExpression: true,
                        },
                      },
                    ],
                  },
                  nodeId: "nd-6e45c3f369",
                },
              ],
              defaultTransition: {
                targetNodeId: null,
              },
              type: "standard",
              id: "nd-6e45c3f369",
              name: "Solo_Travel",
              deletable: true,
              x: 525,
              y: -735,
            },
            {
              comment:
                '<p><strong><span style="font-size: 18px">⛳️  Beginning</span></strong></p><p><br>The <strong>Start Node</strong> is where every new conversation begins.</p>',
              type: "comment",
              id: "nd-b16fb374f8",
              name: "Comment1",
              deletable: true,
              instructions: [],
              height: 148,
              width: 206,
              x: 210,
              y: -360,
            },
            {
              instructions: [
                {
                  id: "ins-e4d6651634",
                  type: "content",
                  content: {
                    type: "text",
                    text: {
                      valueType: "dynamic",
                      dynamicValue: "👋 Welcome on **TripTracks**!",
                      staticValue: "",
                    },
                    typing: {
                      valueType: "static",
                      staticValue: true,
                    },
                  },
                  nodeId: "nd-83a5699645",
                },
                {
                  id: "ins-f3eb10f47e",
                  type: "transition",
                  condition: {
                    type: "expression",
                    payload: "true",
                  },
                  label: "always",
                  generative: {
                    label: "always",
                    suggestion: {
                      condition: "true",
                    },
                    properties: {
                      condition: true,
                    },
                  },
                  nodeId: "nd-83a5699645",
                  destination: {
                    node: "nd-432c872450",
                  },
                },
              ],
              type: "standard",
              id: "nd-83a5699645",
              name: "Greetings",
              deletable: true,
              x: 105,
              y: -195,
            },
            {
              id: "nd-2bb9db230d",
              name: "Start",
              type: "start",
              deletable: false,
              instructions: [
                {
                  id: "trs-8b0779edc5",
                  type: "transition",
                  condition: {
                    type: "expression",
                    payload: "true",
                  },
                  destination: {
                    node: "nd-83a5699645",
                  },
                },
              ],
              x: 60,
              y: -330,
              kbPriority: {
                enabled: true,
                searchScope: "specific",
                kbs: ["kb-adb40ff594"],
              },
            },
            {
              id: "nd-80ac4ff158",
              name: "End",
              type: "end",
              deletable: false,
              instructions: [
                {
                  id: "trs-0260f5e672",
                  type: "transition",
                  condition: {
                    type: "expression",
                    payload: "true",
                  },
                  destination: {
                    node: "END",
                  },
                },
              ],
              x: 225,
              y: 450,
            },
          ],
          parentFolder: "root",
        },
      ],
      intents: [
        {
          id: "int-cancel",
          name: "cancel",
          utterances_with_slots: [
            "cancel",
            "abort",
            "abandon",
            "i want to cancel",
            "forget about this",
            "leave",
            "stop",
            "quit",
            "you know what, nevermind",
            "forget it",
          ],
        },
        {
          id: "int-no",
          name: "no",
          utterances_with_slots: [
            "no",
            "i don't want to",
            "absolutely not",
            "nah",
            "nope",
            "not really",
            "not sure",
            "no thanks",
          ],
        },
        {
          id: "int-yes",
          name: "yes",
          utterances_with_slots: [
            "yes",
            "yeah",
            "absolutely",
            "i'd like to",
            "sure ",
            "hmm probably",
            "yup",
            "ok",
          ],
        },
      ],
      list_entities: [],
      pattern_entities: [],
      actions: [],
      hooks: [
        {
          id: "hk-e0f4cdcb95",
          name: "Millennial",
          content: "",
          hookType: "after_incoming_middleware",
        },
      ],
      qnas: [],
      knowledge_base: [
        {
          dataSources: [
            {
              created_on: 1697570667745,
              data: {
                pages: [
                  {
                    document: {
                      chunks: 1,
                      id: "cf42480f-9f2f-4729-ac13-6faef62c9b95",
                      type: "html",
                      url: "https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/a2ef1906-9fb8-4e20-bfe7-07b74de88c54/document/86ab9f1d-7ca8-4f8f-a0f6-cbcef5ce3295.html",
                    },
                    lastIndexedOn: "2023-10-20T16:35:23.167Z",
                    name: "https://botpress.com/become-a-partner",
                    website: "https://botpress.com/become-a-partner",
                  },
                  {
                    document: {
                      chunks: 5,
                      id: "dbcf66f1-7dfb-4080-8c21-616573c02b7e",
                      type: "html",
                      url: "https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/a2ef1906-9fb8-4e20-bfe7-07b74de88c54/document/33c83ae3-0396-40dd-a1d9-318bf4eb7b49.html",
                    },
                    lastIndexedOn: "2023-10-20T16:35:26.001Z",
                    name: "https://botpress.com/frequently-asked-questions",
                    website: "https://botpress.com/frequently-asked-questions",
                  },
                  {
                    document: {
                      chunks: 1,
                      id: "51ed901f-643e-4eb3-9820-31fee8313312",
                      type: "html",
                      url: "https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/a2ef1906-9fb8-4e20-bfe7-07b74de88c54/document/56a4a5ea-2658-42fe-9da7-b70b0628db3f.html",
                    },
                    lastIndexedOn: "2023-10-20T16:35:28.866Z",
                    name: "https://botpress.com/contact-us",
                    website: "https://botpress.com/contact-us",
                  },
                  {
                    document: {
                      chunks: 3,
                      id: "3dc4771e-d27b-4634-8a3d-1dfcac73cb5f",
                      type: "html",
                      url: "https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/a2ef1906-9fb8-4e20-bfe7-07b74de88c54/document/aeb9fc65-5ea2-48d0-9d5b-a1940d5dcb99.html",
                    },
                    lastIndexedOn: "2023-10-20T16:35:32.962Z",
                    name: "https://botpress.com/pricing",
                    website: "https://botpress.com/pricing",
                  },
                  {
                    document: {
                      chunks: 15,
                      id: "472e1363-4b59-478f-8cd0-3e0a8dd4ca6e",
                      type: "html",
                      url: "https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/a2ef1906-9fb8-4e20-bfe7-07b74de88c54/document/bf4de2ae-21e2-40a4-a8f4-daf00b152a86.html",
                    },
                    lastIndexedOn: "2023-10-20T16:35:45.559Z",
                    name: "https://botpress.com/learn/how-to-make-a-bot",
                    website: "https://botpress.com/learn/how-to-make-a-bot",
                  },
                  {
                    document: {
                      chunks: 21,
                      id: "2aa43adc-92fb-4d7e-9248-1af7e2518908",
                      type: "html",
                      url: "https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/a2ef1906-9fb8-4e20-bfe7-07b74de88c54/document/7d475e4b-bfe9-4999-a491-f94544bbb2d5.html",
                    },
                    lastIndexedOn: "2023-10-20T16:35:53.191Z",
                    name: "https://botpress.com/learn/chatbots",
                    website: "https://botpress.com/learn/chatbots",
                  },
                  {
                    document: {
                      chunks: 4,
                      id: "fcb2d9b6-f94d-4ec6-bfab-b1e61e81aef9",
                      type: "html",
                      url: "https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/a2ef1906-9fb8-4e20-bfe7-07b74de88c54/document/fd654cec-7fc5-45b9-8ecf-0de1efd9f099.html",
                    },
                    lastIndexedOn: "2023-10-20T16:35:56.311Z",
                    name: "https://botpress.com/for-developers",
                    website: "https://botpress.com/for-developers",
                  },
                  {
                    document: {
                      chunks: 3,
                      id: "8aeccadd-5933-47bb-b44f-6cad220e43a8",
                      type: "html",
                      url: "https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/a2ef1906-9fb8-4e20-bfe7-07b74de88c54/document/28134e19-6de6-495c-9ebd-b44658cd5cb1.html",
                    },
                    lastIndexedOn: "2023-10-20T16:36:06.347Z",
                    name: "https://botpress.com/features/supported-platforms",
                    website:
                      "https://botpress.com/features/supported-platforms",
                  },
                  {
                    document: {
                      chunks: 5,
                      id: "39a35d06-c278-401b-b71d-4821992e8e26",
                      type: "html",
                      url: "https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/a2ef1906-9fb8-4e20-bfe7-07b74de88c54/document/984878a5-e025-41d7-bd6c-34d235c6c0da.html",
                    },
                    lastIndexedOn: "2023-10-20T16:36:17.580Z",
                    name: "https://botpress.com/features/overview",
                    website: "https://botpress.com/features/overview",
                  },
                  {
                    document: {
                      chunks: 6,
                      id: "b9351a42-49e3-4e1d-aabd-d4550eab701b",
                      type: "html",
                      url: "https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/a2ef1906-9fb8-4e20-bfe7-07b74de88c54/document/1439b7d5-d01c-4ea0-b76d-084f7c0e1caf.html",
                    },
                    lastIndexedOn: "2023-10-20T16:36:20.120Z",
                    name: "https://botpress.com/features/gpt-native-engine",
                    website: "https://botpress.com/features/gpt-native-engine",
                  },
                  {
                    document: {
                      chunks: 5,
                      id: "5c9fd832-45e4-4f03-85b5-5d77f5f6578a",
                      type: "html",
                      url: "https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/a2ef1906-9fb8-4e20-bfe7-07b74de88c54/document/f9ca2fb0-04eb-4d71-b4f2-a10d26d7dfa9.html",
                    },
                    lastIndexedOn: "2023-10-20T16:36:25.571Z",
                    name: "https://botpress.com/features/conversation-studio",
                    website:
                      "https://botpress.com/features/conversation-studio",
                  },
                  {
                    document: {
                      chunks: 5,
                      id: "59b5065e-208e-4401-9e53-b8e6c17cb180",
                      type: "html",
                      url: "https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/a2ef1906-9fb8-4e20-bfe7-07b74de88c54/document/0a385ac1-89b0-40ea-bc60-76cbc801c78d.html",
                    },
                    lastIndexedOn: "2023-10-20T16:36:28.184Z",
                    name: "https://botpress.com/features/chatbots-comparison",
                    website:
                      "https://botpress.com/features/chatbots-comparison",
                  },
                  {
                    document: {
                      chunks: 2,
                      id: "d4360af8-583c-4961-a362-e8562ae5978d",
                      type: "html",
                      url: "https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/a2ef1906-9fb8-4e20-bfe7-07b74de88c54/document/8f2df876-8914-4ab0-9164-516a9b73884f.html",
                    },
                    lastIndexedOn: "2023-10-20T16:36:31.434Z",
                    name: "https://botpress.com/company/about",
                    website: "https://botpress.com/company/about",
                  },
                  {
                    document: {
                      chunks: 1,
                      id: "bc940f85-46a4-4ab2-84b3-424bd17f59a3",
                      type: "html",
                      url: "https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/a2ef1906-9fb8-4e20-bfe7-07b74de88c54/document/d6fb7867-8b59-4616-954a-27e7e6a9286b.html",
                    },
                    lastIndexedOn: "2023-10-20T16:36:40.570Z",
                    name: "https://botpress.com/",
                    website: "https://botpress.com/",
                  },
                ],
              },
              disabled: false,
              id: "ds-4de065cd61",
              title: "Botpress.com website",
              type: "web-page",
            },
          ],
          description: "This is knowledge about Botpress",
          id: "kb-adb40ff594",
          name: "Botpress Knowledge",
          parentFolder: "root",
        },
      ],
      folders: [],
      agents: {
        SummaryAgent: {
          enabled: true,
          config: {
            summaryMaxTokens: 100,
          },
        },
        TranslatorAgent: {
          config: {
            detectLanguage: true,
          },
        },
        KnowledgeAgent: {
          enabled: true,
          config: {
            answerManually: false,
            context:
              'Summary of the conversation:\n"""\n{{conversation.SummaryAgent.summary}}\n"""\n\nTranscript:\n"""\n{{conversation.SummaryAgent.transcript}}\n"""',
          },
        },
        PersonalityAgent: {
          config: {
            personality: "",
          },
        },
      },
      tables: {},
    };

    const script = document.createElement('script');
    script.src = `${botpressEmbedCode.host}/channel-web/inject.js?channelId=${botpressEmbedCode.channelId}&botId=${botpressEmbedCode.botId}`;
    script.async = true;
  });
  return <div>BotPressChat</div>;
};

export default BotPressChat;
