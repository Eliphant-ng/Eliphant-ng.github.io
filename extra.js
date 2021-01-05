const client = new StreamChat("qk4nn7rpcn75");

await client.setUser({
  id: "jon-snow",
  name: "Jon Snow",
  image: "https://bit.ly/2u9Vc0r",
}, token); // token generated server side

return client;

const channel = client.channel('messaging', 'the-small-council_TG3CY4pBg', {
    name: "Private Chat About the Kingdom",
    image: "https://bit.ly/2F3KEoM",
    members: ["jon-snow"],
    session: 8 // custom field, you can add as many as you want
  });
  
  await channel.watch();
  
  return channel;

  const message = await channel.sendMessage({
    text: "Did you already see the trailer? https://www.youtube.com/watch?v=wA38GCX4Tb0",
  });
  
  return message;

  const messageId = "c5ff70e7-22a6-4944-9d11-94f48a1b9bfe";

const reaction = await channel.sendReaction(messageId, {
  type: "like"
});

return reaction;

const parent = await channel.sendMessage({
    text: 'Episode 1 just blew my mind!',
  });
  
  const reply = await channel.sendMessage({
    text: "Stop it, no spoilers please!",
    parent_id: parent.message.id,
    customField: 123, // custom field, you can add as many as you want
  });

  channel.on("message.new", event => {
    logEvent(event);
  });
  
  await channel.sendMessage({
    text: "What is the medieval equivalent of tabs vs spaces?",
  });