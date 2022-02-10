from exercise2 import sentence_to_numbers
import pytest


def test_if_returns_empty_array_when_one_is_given():
    assert sentence_to_numbers('') == ''


def test_if_error_is_shown_with_invalid_chars():
    with pytest.raises(ValueError, match="Invalid Character"):
        sentence_to_numbers('1*')


def test_if_ABC_is_2():
    assert sentence_to_numbers('ABC') == '222'


def test_if_DEF_is_3():
    assert sentence_to_numbers('DEF') == '333'


def test_if_ABC_is_4():
    assert sentence_to_numbers('GHI') == '444'


def test_if_ABC_is_5():
    assert sentence_to_numbers('JKL') == '555'


def test_if_ABC_is_6():
    assert sentence_to_numbers('MNO') == '666'


def test_if_ABC_is_7():
    assert sentence_to_numbers('PQRS') == '7777'


def test_if_ABC_is_8():
    assert sentence_to_numbers('TUV') == '888'


def test_if_ABC_is_9():
    assert sentence_to_numbers('WXYZ') == '9999'
