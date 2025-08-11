Scan the infix expression from left to right. 
If the scanned character is an operand, put it in the postfix expression. 
Otherwise, do the following
If the precedence of the current scanned operator is higher than the precedence of the operator on top of the stack, or if the stack is empty, or if the stack contains a ‘(‘, then push the current operator onto the stack.
Else, pop all operators from the stack that have precedence higher than or equal to that of the current operator. After that push the current operator onto the stack.
If the scanned character is a ‘(‘, push it to the stack. 
If the scanned character is a ‘)’, pop the stack and output it until a ‘(‘is encountered, and discard both the parenthesis. 
Repeat steps 2-5 until the infix expression is scanned. 
Once the scanning is over, Pop the stack and add the operators in the postfix expression until it is not empty.
Finally, print the postfix expression.