from exercise1 import fizz3Buzz5
import pytest

string = "'<=' not supported between instances of 'int' and 'str'"


def test_if_adds_fizz_in_numbers_divisible_by_3():
    assert fizz3Buzz5(6)[2] == 'Fizz'
    assert fizz3Buzz5(6)[5] == 'Fizz'


def test_if_adds_buzz_in_numbers_divisible_by_5():
    assert fizz3Buzz5(10)[4] == 'Buzz'
    assert fizz3Buzz5(10)[9] == 'Buzz'


def test_if_adds_fizzbuzz_in_numbers_divisible_by_15():
    assert fizz3Buzz5(30)[14] == 'FizzBuzz'
    assert fizz3Buzz5(30)[29] == 'FizzBuzz'


def test_if_error_happens_when_using_a_letter():
    with pytest.raises(TypeError, match=string):
        fizz3Buzz5('a')
