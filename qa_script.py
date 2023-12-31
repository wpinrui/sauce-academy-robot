import argparse
from transformers import AutoModelForCausalLM, AutoTokenizer

def main():
    parser = argparse.ArgumentParser(description='Generate a response using DialoGPT')
    parser.add_argument('message', type=str, help='The input message for which to generate a response')
    args = parser.parse_args()
    tokenizer = AutoTokenizer.from_pretrained("microsoft/DialoGPT-large")
    model = AutoModelForCausalLM.from_pretrained("microsoft/DialoGPT-large")

    # Encode the user input message, add the eos_token and return a tensor in PyTorch
    
    new_user_input_ids = tokenizer.encode(args.message + tokenizer.eos_token, return_tensors='pt')

    bot_input_ids = new_user_input_ids

    chat_history_ids = model.generate(bot_input_ids, max_length=1000, pad_token_id=tokenizer.eos_token_id)

    result = tokenizer.decode(chat_history_ids[:, bot_input_ids.shape[-1]:][0], skip_special_tokens=True)

    if result == "":
        print("To use the chat, type /chat followed by your prompt (or most prompts will be interpreted as a desire to chat.)")
    else:
       print(result)

main()