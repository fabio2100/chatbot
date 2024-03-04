const { env } = process

// Default message when the user sends an unknown message.
const unknownCommandMessage = `Sorry, I don't understand that command. Please try again by replying with one of the available options.`

// Default welcome message. Change it as you need.
const welcomeMessage = `Hey there 👋 Welcome to this chatbot demo!`

// Default help message. Change it as you need.
const defaultMessage = `This is a sample bot to showcase for WhatsApp using the Wassenger API.

Chatbot tasks available:

1️⃣ Create a reminder
2️⃣ List reminders
3️⃣ Delete reminder
4️⃣ Chat with a person

Type *help* to see this message again.

You can also ask the bot to send you multiple sample messages based on the following types:

- Text
- Image
- Video
- Audio
- PDF Document
- Excel document
- File
- Location
- Contact card
- Quote message
- Button
- List
- Emojis 🥳
- Text formatting
- Link preview
- Reaction

Give it a try 😁
`

// Chatbot config
module.exports = {

  // Set one or multiple labels on chatbot-managed chats
  setLabelsOnBotChats: ['bot'],

  // Remove labels when the chat is assigned to a person
  removeLabelsAfterAssignment: true,

  // Set one or multiple labels on chatbot-managed chats
  setLabelsOnUserAssignment: ['from-bot'],

  // Optional. Set a list of labels that will tell the chatbot to skip it
  skipChatWithLabels: ['no-bot'],

  // Optional. Ignore processing messages sent by one of the following numbers
  // Important: the phone number must be in E164 format with no spaces or symbols
  numbersBlacklist: ['19548121853'],

  // Optional. Only process messages one of the the given phone numbers
  // Important: the phone number must be in E164 format with no spaces or symbols
  numbersWhitelist: [],

  // Skip chats that were archived in WhatsApp
  skipArchivedChats: true,

  // If true, when the user requests to chat with a human, the bot will assign
  // the chat to a random available team member.
  // You can specify which members are eligible to be assigned using the `teamWhitelist`
  // and which should be ignored using `teamBlacklist`
  enableMemberChatAssignment: true,

  // If true, chats assigned by the bot will be only assigned to team members that are
  // currently available and online (not unavailable or offline)
  assignOnlyToOnlineMembers: false,

  // Optional. Skip specific user roles from being automatically assigned by the chat bot
  // Available roles are: 'admin', 'supervisor', 'agent'
  skipTeamRolesFromAssignment: ['admin'], // 'supervisor', 'agent'

  // Enter the team member IDs (24 characters length) that can be eligible to be assigned
  // If the array is empty, all team members except the one listed in `skipMembersForAssignment`
  // will be eligible for automatic assignment
  teamWhitelist: [],

  // Optional. Enter the team member IDs (24 characters length) that should never be automatically assigned chats to
  teamBlacklist: [],

  // Optional. Set metadata entries on bot-assigned chats
  setMetadataOnBotChats: [
    {
      key: 'bot_start',
      value: () => new Date().toISOString()
    }
  ],

  // Optional. Set metadata entries when a chat is assigned to a team member
  setMetadataOnAssignment: [
    {
      key: 'bot_stop',
      value: () => new Date().toISOString()
    }
  ],

  welcomeMessage,
  defaultMessage,
  unknownCommandMessage
}
