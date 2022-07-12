/*
 * Copyright (C) 2020 Graylog, Inc.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the Server Side Public License, version 1,
 * as published by MongoDB, Inc.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * Server Side Public License for more details.
 *
 * You should have received a copy of the Server Side Public License
 * along with this program. If not, see
 * <http://www.mongodb.com/licensing/server-side-public-license>.
 */
import React from 'react';
import PropTypes from 'prop-types';

import { LinkContainer } from 'components/common/router';
import { ButtonToolbar, Col, Row, Button } from 'components/bootstrap';
import { DocumentTitle, IfPermitted, PageHeader } from 'components/common';
import DocumentationLink from 'components/support/DocumentationLink';
import EventsContainer from 'components/events/events/EventsContainer';
import DocsHelper from 'util/DocsHelper';
import Routes from 'routing/Routes';
import withLocation from 'routing/withLocation';

const EventsPage = ({ location }) => {
  const filteredSourceStream = location.query.stream_id;

  return (
    <DocumentTitle title="Alerts &amp; Events">
      <span>
        <PageHeader title="Alerts &amp; Events">
          <span>
          通过不同的条件定义事件。向需要注意创建警报的事件添加通知。
          </span>
          <span>
            Graylog&apos;s 新的警报系统允许您定义更灵活、更强大的规则。了解更多信息{' '}
            <DocumentationLink page={DocsHelper.PAGES.ALERTS}
                               text="documentation" />
          </span>

          <ButtonToolbar>
            <LinkContainer to={Routes.ALERTS.LIST}>
              <Button bsStyle="info">Alerts &amp; Events</Button>
            </LinkContainer>
            <LinkContainer to={Routes.ALERTS.DEFINITIONS.LIST}>
              <Button bsStyle="info">Event Definitions</Button>
            </LinkContainer>
            <LinkContainer to={Routes.ALERTS.NOTIFICATIONS.LIST}>
              <Button bsStyle="info">Notifications</Button>
            </LinkContainer>
          </ButtonToolbar>
        </PageHeader>

        <Row className="content">
          <Col md={12}>
            <EventsContainer key={filteredSourceStream} streamId={filteredSourceStream} />
          </Col>
        </Row>
      </span>
    </DocumentTitle>
  );
};

EventsPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withLocation(EventsPage);
