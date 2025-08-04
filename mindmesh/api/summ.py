from sumy.parsers.plaintext import PlaintextParser
from sumy.nlp.tokenizers import Tokenizer
from sumy.summarizers.lex_rank import LexRankSummarizer

# Input your article or long text
text = """
Artificial intelligence (AI) refers to the simulation of human intelligence in machines...
(add more lines to test)
"""

# Set up the parser and summarizer
parser = PlaintextParser.from_string(text, Tokenizer("english"))
summarizer = LexRankSummarizer()

# Number of summary sentences
summary = summarizer(parser.document, 3)  # 3 sentences

# Print the summary
print("\nSummary:\n")
for sentence in summary:
    print(sentence)
