from src import bcrypt, login_manager
from sqlalchemy.orm import declarative_base
from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String

Base = declarative_base()

class User(Base):
    __tablename__ = "user_table"

    id = Column(Integer, primary_key=True)
    first_name = Column(String(30))
    last_name = Column(String(30))

    def __repr__(self):
        return f"User(id={self.id!r}, first_name={self.name!r}, last_name={self.last_name!r}"
