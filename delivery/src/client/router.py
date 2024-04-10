
# @app.get("/all_addresses")
# async def all_addreses(session:AsyncSession = Depends(get_session)):
#     addresses = await session.scalars(select(Points).options(joinedload(Points.company)))
    
#     return addresses.all()