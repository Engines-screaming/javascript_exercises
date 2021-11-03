def print_upper_words(word_list, must_start_with):
    '''Takes in list of words and set of letters. Prints out words in the word list that start with 
    letters in the must_start_with set. '''
    for word in word_list:
        if word[0] in must_start_with:
            print(word.upper())

# this should print "HELLO", "HEY", "YO", and "YES"
print_upper_words(["hello", "hey", "goodbye", "yo", "yes"],
                   must_start_with={"h", "y"})