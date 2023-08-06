const CurdRepository = require('./crud-repository');
const { Ticket } = require('../models');

class TicketRepository extends CurdRepository {
  constructor() {
    super(Ticket);
  }

  async getPendingTickets() {
    const response = await Ticket.findAll({
      where: {
        status: 'PENDING',
      },
    });
    return response;
  }
}

module.exports = TicketRepository;
